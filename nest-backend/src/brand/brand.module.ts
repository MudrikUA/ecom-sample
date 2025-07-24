import { forwardRef, Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { Brand } from './brand.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({  
    providers: [BrandService],
    controllers: [BrandController],
    imports: [
      SequelizeModule.forFeature([Brand]),
      forwardRef(() => AuthModule),
    ],
    exports: []})
export class BrandModule {}
