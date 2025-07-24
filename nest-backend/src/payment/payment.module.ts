import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { PaymentService } from './payment.service';
import { Payment } from './payment.model';

@Module({
  providers: [PaymentService],
  imports: [
    SequelizeModule.forFeature([Payment])
  ],
  exports: [PaymentService]
})
export class PaymentModule { }
