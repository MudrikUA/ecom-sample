import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from './brand.model';
import { CreateBrandDto } from './dto/CreateBrandDto';
import { UpdateBrandDto } from './dto/UpdateBrandDto';
import { Op } from 'sequelize';

@Injectable()
export class BrandService {

    constructor(@InjectModel(Brand) private brandRepo: typeof Brand) { }

    async createBrand(dto: CreateBrandDto) {
        const brand = await this.brandRepo.create(dto);
        return brand;
    }

    async updateBrand(id: number, dto: UpdateBrandDto) {
        await this.brandRepo.update(dto, { where: { id: id } });
        const updatedBrand = await this.brandRepo.findByPk(id);
         if (!updatedBrand) {
                    throw new NotFoundException(`[ERR-13]: Brand with id ${id} not found`);
                }
        return updatedBrand;
    }

    async getAllBrands() {
        const brand = this.brandRepo.findAll();
        return brand;
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
        const { rows, count } = await this.brandRepo.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            order: [[sortField, sortOrder]],
        });

        return { rows, count };
    }

    async getBrandById(id) {
        const brand = this.brandRepo.findByPk(id);
        return brand;
    }

    async deleteBrand(id) {
        return this.brandRepo.destroy({ where: { id } });
    }
}
