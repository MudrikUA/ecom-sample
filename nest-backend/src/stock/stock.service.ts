import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Stock } from './stock.model';
import { Op } from 'sequelize';

@Injectable()
export class StockService {
    constructor(@InjectModel(Stock) private stockRepo: typeof Stock) { }

    async getById(id) {
        return this.stockRepo.findByPk(id);
    }

    async createStock(dto) {
        return this.stockRepo.create(dto);
    }

    async updateStock(id, dto) {
        await this.stockRepo.update(dto, { where: { id: id } });
        return this.stockRepo.findByPk(dto.id);
    }

    async getAllStocks() {
        return this.stockRepo.findAll();
    }

    async decreaseStock(productId: number, quantityToDecrease: number) {
        // Знайти запис за product_id
        const stock = await this.stockRepo.findOne({ where: { product_id: productId } });

        if (!stock) {
            throw new Error(`[ERR-19]: Stock record not found for product_id ${productId}`);
        }

        // Обчислити новий рівень запасу
        const newQuantity = Math.max(stock.quantity - quantityToDecrease, 0);

        // Оновити кількість у базі
        await stock.update({ quantity: newQuantity });

        return stock;
    }

    
    async revertStock(productId: number, quantityToDecrease: number) {
        // Знайти запис за product_id
        const stock = await this.stockRepo.findOne({ where: { product_id: productId } });

        if (!stock) {
            throw new Error(`[ERR-19]: Stock record not found for product_id ${productId}`);
        }

        // Обчислити новий рівень запасу
        const newQuantity = Math.max(stock.quantity + quantityToDecrease, 0);

        // Оновити кількість у базі
        await stock.update({ quantity: newQuantity });

        return stock;
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
        const { rows, count } = await this.stockRepo.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            order: [[sortField, sortOrder]],
        });

        return { rows, count };
    }

    async delete(id) {
        return this.stockRepo.destroy({ where: { id } });
    }
}
