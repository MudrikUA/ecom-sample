import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shipping } from './shipping.model';
import { CreateShippingDto } from './dto/CreateShippingDto';

@Injectable()
export class ShippingService {
    constructor(@InjectModel(Shipping) private shippingRepo: typeof Shipping) { }

    async createShipping(dto: CreateShippingDto) {
        return this.shippingRepo.create(dto);
    }
}
