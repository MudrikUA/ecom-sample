export class CreateOrderItemDto {
    order_id: number;
    readonly product_id: number;
    readonly quantity: number;
    readonly price: number;
    readonly currency: string;
}