import { Shipping } from "src/shipping/shipping.model";

export class UpdateOrderDto {
    readonly status: string;
    readonly shipping: Shipping;
}