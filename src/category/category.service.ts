import { Injectable} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from 'src/schemas/category.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<any>{
    const createdcategory = this.categoryModel.create(createCategoryDto);
    return createdcategory;
  }

  async findAll(): Promise<any>{
    return await this.categoryModel.find();
  }

  async findOne(id: ObjectId): Promise<any>{
    return await this.categoryModel.findById(id);
  }

  async update(id: ObjectId, updateCategoryDto: UpdateCategoryDto): Promise<any> {
    return await this.categoryModel.findByIdAndUpdate(id,updateCategoryDto,{new: true});
  }

  async remove(id: ObjectId): Promise<any> {
    return await this.categoryModel.findByIdAndDelete(id);
  }
}
