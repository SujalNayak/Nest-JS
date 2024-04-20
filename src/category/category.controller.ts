import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ObjectId } from 'mongoose';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto, @Req() req, @Res() res): Promise<any> {
    return res.status(201).json({
      message: 'Category created successfully',
      data: await this.categoryService.create(createCategoryDto)
    })
}

  @Get()
  async findAll(): Promise<any> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<any> {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: ObjectId, @Body() updateCategoryDto: UpdateCategoryDto): Promise<any> {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<any> {
    return this.categoryService.remove(id);
  }
}
