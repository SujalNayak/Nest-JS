import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ObjectId } from 'mongoose';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto, @Req() req, @Res() res): Promise<any> {
    return res.status(HttpStatus.CREATED).json({
      message: 'Student created successfully',
      data: await this.studentsService.create(createStudentDto)
  
    })
  }

  @Get()
  async findAll(): Promise<any> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<any> {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: ObjectId, @Body() updateStudentDto: UpdateStudentDto): Promise<any> {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<any> {
    return this.studentsService.remove(id);
  }
}
