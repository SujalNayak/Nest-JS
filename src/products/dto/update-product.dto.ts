import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Category } from 'src/schemas/category.schema';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    readonly name: string;
    readonly price: number;
    readonly qty: number;
    readonly description: string;
    readonly category: Category;
}
