import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { ShippingMethodService } from './shipping-method.service';
import { CreateShippingMethodDto } from './dto/CreateShippingMethodDto';
import { UpdateShippingMethodDto } from './dto/UpdateShippingMethodDto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('shipping-method')
export class ShippingMethodController {
    constructor(private shippingMethodService: ShippingMethodService) { }
    
    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER', 'USER')
    @Get('active')
    getAllPaymentMethods() {
        console.log('getAllPaymentMethods')
        return this.shippingMethodService.getAllShippingMethods();
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAll(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.shippingMethodService.getAllByFilter(query);
        res.setHeader('Content-Range', `shipping-methods 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        console.log('getById')
        return this.shippingMethodService.getById(id);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Post()
    createPaymentMethod(@Body() dto: CreateShippingMethodDto) {
        return this.shippingMethodService.createShippingMethod(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Put(':id')
    updateShippingMethod(@Param('id') id: number, @Body() dto: UpdateShippingMethodDto) {
        return this.shippingMethodService.updateShippingMethod(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.shippingMethodService.delete(id);
    }
}
