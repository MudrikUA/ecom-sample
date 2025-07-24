export class UpdateOrderItemDto {
    readonly id: number;
    readonly order_id: number;
    readonly product_id: number;
    readonly quantity: number;
    readonly price: number;
    readonly currency: string;
}