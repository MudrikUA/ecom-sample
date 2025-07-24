import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { PaymentMethodController } from './payment-method.controller';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethod } from './payment-method.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [PaymentMethodService],
  controllers: [PaymentMethodController],
  imports: [
    SequelizeModule.forFeature([PaymentMethod]),
    forwardRef(() => AuthModule),
  ],
  exports: []
})
export class PaymentMethodModule { }
