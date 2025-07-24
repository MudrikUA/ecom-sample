import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { PaymentMethodService } from './payment-method.service';
import { CreatePaymentMethodDto } from './dto/CreatePaymentMethodDto';
import { UpdatePaymentMethodDto } from './dto/UpdatePaymentMethodDto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('payment-method')
export class PaymentMethodController {
    constructor(private paymentMethodService: PaymentMethodService) { }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER', 'USER')
    @Get('active')
    getAllPaymentMethods() {
        return this.paymentMethodService.getAllPaymentMethods();
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAll(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.paymentMethodService.getAllByFilter(query);
        res.setHeader('Content-Range', `payment-methods 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.paymentMethodService.getById(id);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Post()
    createPaymentMethod(@Body() dto: CreatePaymentMethodDto) {
        return this.paymentMethodService.createPaymentMethod(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN','MANAGER')
    @Put(':id')
    updatePaymentMethod(@Param('id') id: number, @Body() dto: UpdatePaymentMethodDto) {
        return this.paymentMethodService.updatePaymentMethod(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.paymentMethodService.delete(id);
    }

}
