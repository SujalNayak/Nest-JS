import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Products{
    @Prop()
    name: string;
    @Prop()
    price: number;
    @Prop()
    qty: number;
    @Prop()
    description: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);