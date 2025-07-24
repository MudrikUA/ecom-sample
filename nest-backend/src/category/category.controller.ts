import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { CreateCategoryDto } from './dto/CreateCategoryDto';
import { UpdateCategoryDto } from './dto/UpdateCategoryDto';
import { CategoryService } from './category.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Response } from 'express';

@Controller('category')
export class CategoryController {

    constructor(private categoryRepo: CategoryService) { }


    @Get('/tree/:alias')
    getAllActiveChildCategoriesByParentAlias(@Param('alias') alias: string) {
        return this.categoryRepo.getAllActiveChildCategoriesByParentAlias(alias);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getCategories(@Query() query: any, @Res() res: Response) {
      const { rows, count } = await this.categoryRepo.getAllByFilter(query);
      res.setHeader('Content-Range', `categories 0-${rows.length}/${count}`);
      res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      res.json(rows);
    }

    // @UseGuards(RolesGuard)
    // @Roles('ADMIN', 'MANAGER')
    @Get(':id')
    async getCategoryById(@Param('id') id: string) {
        const category = await this.categoryRepo.getById(id);
        return category;
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Post()
    async createCategory(@Body() dto: CreateCategoryDto) {
        return this.categoryRepo.createCategory(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Put(':id')
    async updateCategory(@Param('id') id: number, @Body() dto: UpdateCategoryDto) {
        return this.categoryRepo.updateCategory(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async deleteCategory(@Param('id') id: number) {
      return this.categoryRepo.deleteCategory(id);
    }

//reatc-admin api

    // @Get()
    // async getAllCategories(@Query('range') range: string,
    //     @Res({ passthrough: true }) res: Response) {
    //     const rangeArray: number[] = JSON.parse(range);
    //     const { count, rows } = await this.categoryRepo.getAllCategories(rangeArray[0], rangeArray[1] - rangeArray[0]);
    //     res.setHeader('Content-Range', `allCategories ${rangeArray[0]}-${rangeArray[1]}/${count}`);
    //     res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    //     res.json(rows);
    // }

}

