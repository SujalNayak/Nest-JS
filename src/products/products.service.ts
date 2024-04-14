import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from '../schemas/product.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Products.name) private productModel: Model<Products>) {}

  async create(createProductDto: CreateProductDto):Promise<any> {
    const createdProduct = this.productModel.create(createProductDto);
    return createdProduct;
  }

  async findAll():Promise<any> {
    return await this.productModel.find();
  }

  async findOne(id: ObjectId):Promise<any> {
    return await this.productModel.findById(id);
  }

  async update(id: ObjectId, updateProductDto: UpdateProductDto) {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto, {new: true});
  }

  async remove(id: ObjectId):Promise<any> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
