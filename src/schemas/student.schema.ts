import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Students{
    @Prop()
    name: string;
    @Prop()
    age: number;
    @Prop()
    Standard: number;
    @Prop()
    Division: string;
}


export const StudentSchema = SchemaFactory.createForClass(Students);