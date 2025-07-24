export class CreateOrderDto {
    readonly user_id: number;
    readonly total_price: number;
    readonly currency: string;
    readonly status: string;
}
