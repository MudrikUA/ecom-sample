import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './payment-method.model';
import { Op } from 'sequelize';

@Injectable()
export class PaymentMethodService {

    constructor(@InjectModel(PaymentMethod) private paymentMethodRepo: typeof PaymentMethod) { }

    async createPaymentMethod(dto) {
        const paymentMethod = await this.paymentMethodRepo.create(dto);
        return paymentMethod;
    }

    async updatePaymentMethod(id, dto) {
        const [affectedCount] = await this.paymentMethodRepo.update(dto, {
            where: { id: dto.id },
        });

        if (affectedCount > 0) {
            const paymentMethod = this.paymentMethodRepo.findOne({ where: { id: id } });
            return paymentMethod;
        }
        return null;
    }

    async getAllPaymentMethods() {
        const paymentMethod = this.paymentMethodRepo.findAll({ where: { isActive: true } });
        return paymentMethod;
    }

    async getAllByFilter(query: any) {
        const { filter, range, sort } = query;

        // Декодуємо JSON параметри
        const filters = filter ? JSON.parse(filter) : {};
        const [sortField, sortOrder] = sort ? JSON.parse(sort) : ['id', 'ASC'];
        const [offset, limit] = range ? JSON.parse(range) : [0, 10];

        // Побудова фільтрів для пошуку
        const whereClause: any = {};
        if (filters.id) whereClause.id = { [Op.in]: filters.id };
        if (filters.name) whereClause.name = { [Op.iLike]: `%${filters.name}%` };

        // Отримання даних
        const { rows, count } = await this.paymentMethodRepo.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            order: [[sortField, sortOrder]],
        });

        return { rows, count };
    }

    async getById(id) {
        return this.paymentMethodRepo.findByPk(id);
    }

    async delete(id) {
        return this.paymentMethodRepo.destroy({ where: { id } });
    }
}