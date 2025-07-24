import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { PricebookController } from './pricebook.controller';
import { PricebookService } from './pricebook.service';
import { PriceBook } from './pricebook.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [PricebookService],
  controllers: [PricebookController],
  imports: [
    SequelizeModule.forFeature([PriceBook]),
    forwardRef(() => AuthModule),
  ],
  exports: []
})
export class PricebookModule { }
