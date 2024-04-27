import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ObjectId } from 'mongoose';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("products")
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Req() req, @Res() res):Promise<any> {
    return res.status(HttpStatus.CREATED).json({
      message: 'Product created successfully',
      data: await this.productsService.create(createProductDto)
    })
  }

  @Get()
  async findAll(): Promise<any> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId):Promise<any> {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: ObjectId, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.productsService.remove(id);
  }
}
