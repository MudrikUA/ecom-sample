import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { Op } from 'sequelize';

@Injectable()
export class RoleService {
    constructor(@InjectModel(Role) private RoleRepo: typeof Role) { }

    async createRole(dto) {
        const role = await this.RoleRepo.create(dto);
        return role
    }

    async updateRole(id, dto) {
        await this.RoleRepo.update(dto, { where: { id: id } });
        const updatedRole = await this.RoleRepo.findByPk(id);
        return updatedRole;
    }

    async getAllRole() {
        const role = await this.RoleRepo.findAll();
        return role
    }

    async getRoleByValue(value: string) {
        const role = await this.RoleRepo.findOne({ where: { name: value } })
        return role;
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
                console.log("array of objects-> " + JSON.stringify(filters.id));
                if (filters.id.length > 0 && typeof filters.id[0] === 'object') {
                    console.log("array of objects 2-> " + JSON.stringify(filters.id));
                    whereClause.id = { [Op.in]: filters.id.map((item) => item.id) };
                } else {
                    console.log("array-> " + JSON.stringify(filters.id));
                    whereClause.id = { [Op.in]: filters.id };
                }
            } else {
                console.log("single-> " + JSON.stringify(filters.id));
                whereClause.id = filters.id;
            }
        }
        if (filters.name) whereClause.name = { [Op.iLike]: `%${filters.name}%` };

        // Отримання даних
        const { rows, count } = await this.RoleRepo.findAndCountAll({
            where: whereClause,
            limit,
            offset,
            order: [[sortField, sortOrder]],
        });

        return { rows, count };
    }

    async deleteRole(id) {
        return this.RoleRepo.destroy({ where: { id } });
    }

    async getById(id) {
        return this.RoleRepo.findByPk(id);
    }
}
