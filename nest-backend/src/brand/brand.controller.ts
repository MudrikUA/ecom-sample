import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/CreateBrandDto';
import { UpdateBrandDto } from './dto/UpdateBrandDto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('brand')
export class BrandController {
    constructor(private brandService: BrandService) {}

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAllBrands(@Query() query: any, @Res() res: Response) {
      const { rows, count } = await this.brandService.getAllByFilter(query);
      res.setHeader('Content-Range', `brand 0-${rows.length}/${count}`);
      res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      res.json(rows);
    }

    @Get(':id')
    async getBrandById(@Param('id') id: string){
        return this.brandService.getBrandById(id);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN','MANAGER')
    @Post()
    async createBrand(@Body() dto: CreateBrandDto){
        return this.brandService.createBrand(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN','MANAGER')
    @Put(':id')
    async updateBrand(@Param('id') id: number, @Body() dto: UpdateBrandDto){
        return this.brandService.updateBrand(id, dto);
    }
    
    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async deleteBrand(@Param('id') id: number) {
      return this.brandService.deleteBrand(id);
    }
}
