export class CreateShippingDto {
    order_id: number;
    //readonly customer_full_name: string;
    readonly customer_first_name: string;
    readonly customer_last_name: string;
    readonly customer_phone: string;
    readonly address: string;
    readonly city: string;
    readonly postal_code: string;
    readonly country: string;
    readonly status: string;
    readonly shipping_method_id: number;
    readonly shipped_at: Date;
    readonly notes: string;
}