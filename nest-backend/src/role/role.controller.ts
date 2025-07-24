import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/CreateRoleDto';
import { UpdateRoleDto } from './dto/UpdateRoleDto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) { }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAllRole(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.roleService.getAllByFilter(query);
        res.setHeader('Content-Range', `role 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @Get(':id')
    async getRoleById(@Param('id') id: string) {
        const role = await this.roleService.getById(id);
        return role;
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Post()
    createRole(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Put(':id')
    updateRole(@Param('id') id: number, @Body() dto: UpdateRoleDto) {
        return this.roleService.updateRole(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async deleteRole(@Param('id') id: number) {
        return this.roleService.deleteRole(id);
    }

    // @UseGuards(RolesGuard)
    // @Roles('ADMIN')
    // @Get()
    // getAllRole() {
    //     return this.roleService.getAllRole();
    // }
}
