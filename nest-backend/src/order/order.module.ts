import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { PaymentModule } from 'src/payment/payment.module';
import { ShippingModule } from 'src/shipping/shipping.module';
import { AuthModule } from 'src/auth/auth.module';
import { StockModule } from 'src/stock/stock.module';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
  imports: [
    SequelizeModule.forFeature([Order, OrderItem]),
    PaymentModule,
    ShippingModule,
    StockModule,
    forwardRef(() => AuthModule),
  ],
  exports: []
})
export class OrderModule { }
