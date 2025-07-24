import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './payment.model';
import { CreatePaymentDto } from './dto/CreatePaymentDto';

@Injectable()
export class PaymentService {
    constructor(@InjectModel(Payment) private paymentRepo: typeof Payment) { }

    async createPayment(dto: CreatePaymentDto) {
        return this.paymentRepo.create(dto);
    }
}
