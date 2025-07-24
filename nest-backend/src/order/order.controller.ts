import { Body, Controller, Get, Param, Post, Put, UseGuards, Request, Res, Query, Delete } from '@nestjs/common';
import { Response } from 'express';
import { OrderService } from './order.service';
import { UpdateOrderStatusDto } from './dto/UpdateOrderStatusDto';
import { CreateOrderFullTypedDto } from './dto/CreateOrderFullTypedDto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UpdateOrderDto } from './dto/UpdateOrderDto';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @UseGuards(RolesGuard)
    @Roles('USER', 'ADMIN', 'MANAGER')
    @Get('/byUser')
    async getOrdersByUser(@Request() req){
        const userId = req.user?.id;
        return this.orderService.getOrdersByUser(userId);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAllOrders(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.orderService.getAllByFilter(query);
        res.setHeader('Content-Range', `role 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get(':id')
    async getRoleById(@Param('id') id: string) {
        const role = await this.orderService.getOrderById(id);
        return role;
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Post()
    async createOrder(@Body() dto: CreateOrderFullTypedDto) {
        return this.orderService.createOrder(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Put(':id')
    updateRole(@Param('id') id: number, @Body() dto: UpdateOrderDto) {
        return this.orderService.updateOrder(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async deleteRole(@Param('id') id: number) {
        return this.orderService.deleteOrder(id);
    }

    // @UseGuards(RolesGuard)
    // @Roles('ADMIN','MANAGER')
    // @Put(':id')
    // async changeOrderStatus(@Param('id') id: number, @Body() dto: UpdateOrderStatusDto) {
    //     return this.orderService.changeOrderStatus(dto);
    // }

    //TODO change call from storefront and remove this function
    // @UseGuards(RolesGuard)
    // @Roles('ADMIN', 'MANAGER')
    // @Get('/byId/:orderId')
    // async getOrderById(@Param('orderId') orderId: string) {
    //     return this.orderService.getOrderById(orderId);
    // }



    // @UseGuards(RolesGuard)
    // @Roles('ADMIN', 'MANAGER')
    // @Get()
    // async getOrders() {
    //     return this.orderService.getOrders();
    // }

 
}
