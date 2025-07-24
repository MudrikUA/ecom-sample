export class CreateProductDto {
    readonly title: string;
    readonly descriptionLong: string;
    readonly descriptionShort: string;
    readonly brand_id: number;
    readonly type: string;
    readonly size: string;
    readonly sku: string;
    readonly category_id: number;
    readonly is_active: boolean;
}