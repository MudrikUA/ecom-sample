export class CreatePaymentDto {
    order_id: number;
    readonly payment_method_id: number;
    readonly transaction_id: string;
    readonly status: string;
    readonly paid_at: Date;
}