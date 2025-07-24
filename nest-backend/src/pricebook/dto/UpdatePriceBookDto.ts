export class UpdatePriceBookDto {
    readonly id: number;
    readonly product_id: number;
    readonly price: number;
    readonly currency: string;
}