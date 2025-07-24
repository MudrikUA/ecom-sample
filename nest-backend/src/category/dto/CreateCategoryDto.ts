export class CreateCategoryDto {
    readonly name: string;
    readonly alias: string;
    readonly type: string;
    readonly parent_id: number;
}