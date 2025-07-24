import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { ShippingService } from './shipping.service';
import { Shipping } from './shipping.model';

@Module({  
    providers: [ShippingService],
    imports: [
      SequelizeModule.forFeature([Shipping])
    ],
    exports: [ShippingService]})
export class ShippingModule {}
