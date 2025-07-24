import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';
import { UpdateOrderStatusDto } from './dto/UpdateOrderStatusDto';
import { PaymentService } from 'src/payment/payment.service';
import { ShippingService } from 'src/shipping/shipping.service';
import { CreateOrderFullTypedDto } from './dto/CreateOrderFullTypedDto';
import { OrderItem } from './order-item.model';
import { CreateOrderItemDto } from './dto/CreateOrderItemDto';
import { StockService } from 'src/stock/stock.service';
import { Shipping } from 'src/shipping/shipping.model';
import { Payment } from 'src/payment/payment.model';
import { Op } from 'sequelize';

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order) private orderRepo: typeof Order,
        @InjectModel(OrderItem) private orderItemRepo: typeof OrderItem,
        private paymentService: PaymentService,
        private shippingService: ShippingService,
        private stockService: StockService) { }

    async createOrder(dto: CreateOrderFullTypedDto) {
        const order = await this.orderRepo.create({
            user_id: dto.user_id,
            total_price: dto.total_price,
            currency: dto.currency,
            status: dto.status,
        });

        try {
            // const [shipping, payment] = await Promise.all([
            //     this.shippingService.createShipping({ ...dto.shipping_id, order_id: order.id }),
            //     this.paymentService.createPayment({ ...dto.payment_id, order_id: order.id })
            // ]);

            // await Promise.all([
            //     order.shipping_id = shipping.id,
            //     order.payment_id = payment.id,
            //     this.orderItemRepo.bulkCreate(
            //         dto.items.map(item => ({ ...item, order_id: order.id }))
            //     )
            // ]);
            await Promise.all([
                this.shippingService.createShipping({ ...dto.shipping_id, order_id: order.id }),
                this.paymentService.createPayment({ ...dto.payment_id, order_id: order.id }),
                this.orderItemRepo.bulkCreate(
                    dto.items.map(item => ({ ...item, order_id: order.id }))
                )
            ]);

            order.status = 'new';
            await order.save();
        } catch (error) {
            await order.update({ status: 'failed' });
            throw new Error('[ERR-7]: Order creation failed - ' + error.message);
        }

        this.reduceStokValue(dto.items);
        return order;
    }

    private reduceStokValue(items: CreateOrderItemDto[]) {
        items.forEach((item) => {
            this.stockService.decreaseStock(item.product_id, item.quantity);
        });
    }

    private revertStokValue(items: CreateOrderItemDto[]) {
        items.forEach((item) => {
            this.stockService.revertStock(item.product_id, item.quantity);
        });
    }

    // async changeCategory(dto) {
    //     const order = this.orderRepo.update(dto, { where: { id: dto.id } });
    //     return order;
    // }

    // async getOrders() {
    //     const order = this.orderRepo.findAll();
    //     return order;
    // }

    async getOrdersByUser(userId) {
        const order = this.orderRepo.findAll({
            where: { user_id: userId }, include: [
                {
                    model: Shipping,
                },
            ],
        });
        return order;
    }

    async getOrderById(id) {
        const order = await this.orderRepo.findByPk(id, { include: [{ model: Shipping }, { model: Payment }] });

        if (!order) {
            throw new NotFoundException(`[ERR-10]: Order with id ${id} not found`);
        }

        if (order.status === "new") {
            order.status = "processing"
            order.save();
        }

        return order;
    }

    async changeOrderStatus(dto: UpdateOrderStatusDto) {
        const order = this.orderRepo.update(dto, { where: { id: dto.id } });
        return order;
    }
    async changePaymentStatus(status) {
        // const order = this.orderRepo.update(dto, { where: { id: dto.id } });
        return "ok";
    }

    async getAllByFilter(query: any) {
        const { filter, range, sort } = query;

        // Декодуємо JSON параметри
        const filters = filter ? JSON.parse(filter) : {};
        const [sortField, sortOrder] = sort ? JSON.parse(sort) : ['id', 'ASC'];
        const [offset, limit] = range ? JSON.parse(range) : [0, 10];

        // Побудова фільтрів для пошуку
        const whereClause: any = {};
        if (filters.id) {
            if (Array.isArray(filters.id)) {
                if (filters.id.length > 0 && typeof filters.id[0] === 'object') {
                    whereClause.id = { [Op.in]: filters.id.map((item) => item.id) };
                } else {
                    whereClause.id = { [Op.in]: filters.id };
                }
            } else {
                whereClause.id = filters.id;
            }
        }
        if (filters.name) whereClause.name = { [Op.iLike]: `%${filters.name}%` };

        // Отримання даних
        const { rows, count } = await this.orderRepo.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            order: [[sortField, sortOrder]],
        });

        return { rows, count };
    }

    async updateOrder(id, dto) {
        const order = await this.orderRepo.findByPk(id, { include: [{ model: Shipping }, { model: Payment }] });

        if (!order) {
            throw new NotFoundException(`[ERR-10]: Order with id ${id} not found`);
        }

        try {
            // Перевіряємо можливість оновлення статусу
            if (dto.status && dto.status !== order.status) {
                // Валідація переходів статусу
                const isValidTransition = this.validateStatusTransition(order.status, dto.status);
                if (!isValidTransition) {
                    throw new BadRequestException(`[ERR-11]: Invalid status transition from ${order.status} to ${dto.status}`);
                }
                order.status = dto.status;
                order.save();
            }

            if (dto.shipping.status && dto.shipping.status !== order.shipping.status) {
                order.shipping.status = dto.shipping.status;
            }
            
            order.shipping.notes = dto.shipping.notes
            order.shipping.tracking_number = dto.shipping.tracking_number
            order.shipping.save();
            // Оновлюємо ордер
            //await order.update(dto);

            // Якщо статус змінився на "cancelled" або "failed"
            if (dto.status === 'cancelled' || dto.status === 'failed') {
                // Повертаємо товари на склад
                await this.revertStokValue(order.items);

                // TODO: Відправляємо повідомлення клієнту 
                //   await this.notificationService.notifyCustomer({
                //     userId: order.user_id,
                //     orderId: order.id,
                //     status: dto.status,
                //     message: `Your order #${order.id} has been ${dto.status}.`
                //   });
            }

            // TODO: Логуємо зміни
            // await this.orderHistoryRepo.create({
            //   order_id: order.id,
            //   changed_by: dto.updated_by,
            //   previous_status: order.status,
            //   new_status: dto.status,
            //   changes: JSON.stringify(updateData),
            //   changed_at: new Date()
            // });

            return await this.orderRepo.findOne({
                where: { id: id },
                include: [
                    { model: Shipping },
                    { model: Payment }
                ]
            });
        } catch (error) {
            throw new Error(`[ERR-12]: Failed to update order - ${error.message}`);
        }
    }

    async deleteOrder(id) {
        return this.orderRepo.destroy({ where: { id } });
    }


    validateStatusTransition(currentStatus: string, newStatus: string): boolean {
        // Мапа дозволених переходів статусу
        const allowedTransitions: Record<string, string[]> = {
            ["pending"]: ['processing', 'cancelled', 'failed'],
            ['processing']: ['paid', 'cancelled', 'failed'],
            ['paid']: ['shipped', 'cancelled', 'failed'],
            ['shipped']: ['delivered', 'failed'],
            ['delivered']: [], // Фінальний статус
            ['cancelled']: [], // Фінальний статус
            ['failed']: [], // Фінальний статус
        };

        return allowedTransitions[currentStatus]?.includes(newStatus) ?? false;
    }

}
