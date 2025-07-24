import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { Stock } from './stock.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [StockService],
  controllers: [StockController],
  imports: [
    SequelizeModule.forFeature([Stock]),
    forwardRef(() => AuthModule),
  ],
  exports: [StockService]
})
export class StockModule { }
