import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CreatePriceBookDto } from './dto/CreatePriceBookDto';
import { PricebookService } from './pricebook.service';
import { UpdatePriceBookDto } from './dto/UpdatePriceBookDto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('pricebook')
export class PricebookController {
    constructor(private priceBookService: PricebookService) { }


    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAllPriceBooks(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.priceBookService.getAllByFilter(query);
        res.setHeader('Content-Range', `shipping-methods 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.priceBookService.getById(id);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Post()
    createPriceBook(@Body() dto: CreatePriceBookDto) {
        return this.priceBookService.createPriceBook(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Put(':id')
    updatePriceBook(@Param('id') id: number, @Body() dto: UpdatePriceBookDto) {
        return this.priceBookService.updatePriceBook(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.priceBookService.delete(id);
    }
}
