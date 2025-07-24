import { Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors, UploadedFiles, UseGuards, Query, BadRequestException, Res, Delete, NotFoundException, Patch } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/CreateProductDto';
import { UpdateProductDto } from './dto/UpdateProductDto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Response } from 'express';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Get()
    async getAllByFilters(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.productService.getAllByFilter(query);
        res.setHeader('Content-Range', `product 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(id);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Post()
    @UseInterceptors(FilesInterceptor('images', 5))
    createProduct(@Body() dto: CreateProductDto,
        @UploadedFiles() images: Array<{ originalname: string; buffer: Buffer }>) {
        return this.productService.createProduct(dto, images);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Put(':id')
    changeProduct(@Param('id') id: number, @Body() dto: UpdateProductDto) {
        return this.productService.changeProduct(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.productService.delete(id);
    }

    @Get('categoryId/:id')
    getProductsByCategory(@Param('id') id: string) {
        return this.productService.getProductsByCategory(id);
    }

    @Get('categoryAlias/:alias')
    getProductsByCategoryAlias(
        @Param('alias') alias: string,
        @Query('page') page: string = '1',
        @Query('pageSize') pageSize: string = '10',
        @Query('currency') currency?: string,
        @Query('brand') brand?: string | string[],
        @Query('country') country?: string | string[],
        @Query('minPrice') minPrice?: string,
        @Query('maxPrice') maxPrice?: string
    ) {
        // Перевіряємо, чи передано currency (обов'язковий параметр)
        if (!currency) {
            throw new BadRequestException("Currency is required");
        }

        // Завжди приводимо до масиву (навіть якщо значення одне)
        const brandsArray = Array.isArray(brand) ? brand : brand ? [brand] : [];
        const countriesArray = Array.isArray(country) ? country : country ? [country] : [];
        console.log("countriesArray" + JSON.stringify(countriesArray))
        // Коректна обробка minPrice та maxPrice
        const minPriceValue = isNaN(Number(minPrice)) ? undefined : Number(minPrice);
        const maxPriceValue = isNaN(Number(maxPrice)) ? undefined : Number(maxPrice);

        return this.productService.getProductsByCategoryAlias(
            alias,
            Number(page),
            Number(pageSize),
            currency,
            brandsArray,
            countriesArray,
            minPriceValue,
            maxPriceValue
        );
    }


    @Get('/categoryFilters/:alias')
    getFiltersByCategoryAlias(
        @Param('alias') alias: string,
        @Query('currency') currency: string
    ) {
        return this.productService.getFiltersByCategoryAlias(alias, currency);
    }

    @Post('byIds')
    getProductsByIds(@Body('ids') ids: string[]) {
        return this.productService.getProductsByIds(ids);
    }

    // Ендпоінт для завантаження нових зображень
    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Post(':id/uploadImages')
    @UseInterceptors(FilesInterceptor('images', 5)) // Максимум 5 файлів
    async uploadProductImages(
        @Param('id') id: number,
        @UploadedFiles() @UploadedFiles() files: Array<{ originalname: string; buffer: Buffer }>
    ) {
        const fileNames = await this.productService.uploadProductImages(id, files);

        return {
            success: true,
            data: fileNames
        };
    }

    // Ендпоінт для видалення одного зображення
    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Delete(':id/image')
    async removeProductImage(
        @Param('id') id: number,
        @Query('image') image: string
    ) {
        const product = await this.productService.removeProductImage(id, image);

        return {
            success: true,
            data: product
        };
    }


    @UseGuards(RolesGuard)
    @Roles('ADMIN', 'MANAGER')
    @Patch(':id/images')
    async updateProductImages(
        @Param('id') id: number,
        @Body() { images }: { images: string[] }
    ) {
        const product = await this.productService.updateProductImages(id, images);
        return {
            success: true,
            data: product
        };
    }
}