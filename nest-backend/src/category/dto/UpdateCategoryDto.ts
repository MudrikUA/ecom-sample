export class UpdateCategoryDto {
    readonly id: number;
    readonly alias: string;
    readonly type: string;
    readonly name: string;
    readonly parent_id: number;
}