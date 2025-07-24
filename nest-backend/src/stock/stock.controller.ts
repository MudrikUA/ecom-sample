import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/CreateStockDto';
import { UpdateStockDto } from './dto/UpdateStockDto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('stock')
export class StockController {
    constructor(private stockService: StockService) { }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAll(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.stockService.getAllByFilter(query);
        res.setHeader('Content-Range', `stock 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.stockService.getById(id);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Post()
    createStock(@Body() dto: CreateStockDto) {
        return this.stockService.createStock(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN','MANAGER')
    @Put(':id')
    updateStock(@Param('id') id: number, @Body() dto: UpdateStockDto) {
        return this.stockService.updateStock(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.stockService.delete(id);
    }
}
