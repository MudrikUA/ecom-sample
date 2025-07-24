import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PriceBook } from './pricebook.model';
import { Op } from 'sequelize';

@Injectable()
export class PricebookService {
    constructor(@InjectModel(PriceBook) private priceBookRepo: typeof PriceBook) { }

    async getById(id) {
        return this.priceBookRepo.findByPk(id);
    }

    async createPriceBook(dto) {
        const priceBook = await this.priceBookRepo.create(dto);
        return priceBook
    }

    async updatePriceBook(id, dto) {
        await this.priceBookRepo.update(dto, { where: { id: id } });
        return this.priceBookRepo.findByPk(dto.id);
    }

    async getAllPriceBooks() {
        const priceBook = await this.priceBookRepo.findAll();
        return priceBook
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
        const { rows, count } = await this.priceBookRepo.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            order: [[sortField, sortOrder]],
        });

        return { rows, count };
    }

    async delete(id) {
        return this.priceBookRepo.destroy({ where: { id } });
    }
}
