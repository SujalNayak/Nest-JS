import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Students } from 'src/schemas/student.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class StudentsService {

  constructor(@InjectModel(Students.name) private studentModel: Model<Students>) {}

  async create(createStudentDto: CreateStudentDto):Promise<any> {
    return await this.studentModel.create(createStudentDto);
  }

  async findAll():Promise<any> {
    return await this.studentModel.find();
  }

  async findOne(id: ObjectId):Promise<any> {
    return await this.studentModel.findById(id);
  }

  async update(id: ObjectId, updateStudentDto: UpdateStudentDto):Promise<any> {
    return await this.studentModel.findByIdAndUpdate(id, updateStudentDto, {new: true});
  }

  async remove(id: ObjectId):Promise<any> {
    return await this.studentModel.findByIdAndDelete(id);
  }
}
