import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ShippingMethodController } from './shipping-method.controller';
import { ShippingMethodService } from './shipping-method.service';
import { ShippingMethod } from './shipping-method.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ShippingMethodService],
  controllers: [ShippingMethodController],
  imports: [
    SequelizeModule.forFeature([ShippingMethod]),
    forwardRef(() => AuthModule),
  ],
  exports: []
})
export class ShippingMethodModule { }
