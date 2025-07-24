import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShippingMethod } from './shipping-method.model';
import { Op } from 'sequelize';

@Injectable()
export class ShippingMethodService {
    constructor(@InjectModel(ShippingMethod) private shippingMethodRepo: typeof ShippingMethod) { }

    async getById(id) {
        return this.shippingMethodRepo.findByPk(id);
    }

    async createShippingMethod(dto) {
        return this.shippingMethodRepo.create(dto);
    }

    async updateShippingMethod(id, dto) {
        await this.shippingMethodRepo.update(dto, { where: { id: id } });
        return this.getById(id);
    }

    async delete(id) {
        return this.shippingMethodRepo.destroy({ where: { id } });
    }

    async getAllShippingMethods() {
        return this.shippingMethodRepo.findAll({ where: { isActive: true } });
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
        const { rows, count } = await this.shippingMethodRepo.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            order: [[sortField, sortOrder]],
        });

        return { rows, count };
    }
}