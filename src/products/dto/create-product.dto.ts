import { Category } from "src/schemas/category.schema";

export class CreateProductDto {
    readonly name: string;
    readonly price: number;
    readonly qty: number;
    readonly description: string;
    readonly category: Category;   
}
