import { CreatePaymentDto } from "src/payment/dto/CreatePaymentDto";
import { CreateShippingDto } from "src/shipping/dto/CreateShippingDto";
import { CreateOrderItemDto } from "./CreateOrderItemDto";

export class CreateOrderFullTypedDto {
    readonly user_id: number;
    readonly total_price: number;
    readonly currency: string;
    readonly status: string;
    readonly shipping_id: CreateShippingDto;
    readonly payment_id: CreatePaymentDto;
    readonly items: CreateOrderItemDto[]
}
