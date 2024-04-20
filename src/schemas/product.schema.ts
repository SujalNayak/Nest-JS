import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Category } from "./category.schema";
import mongoose from "mongoose";

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
    @Prop({
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Category',
    })
    category: Category;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);