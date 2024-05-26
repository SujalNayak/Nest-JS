import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './multer.config';
import { v2 as cloudinary } from 'cloudinary';
import { Express } from 'express';



@ApiTags("users")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): string {
    return this.appService.getAllUsers();
  }

  @Post('/users')
  addUser(@Req() req):any{
    console.log(req.body);
    return this.appService.addUser(req.body);
  }
  cloudinaryHandler = async (file) => {
    cloudinary.config({
      cloud_name: "dzjnlpzak",
      api_key: "664615118614288",
      api_secret: "JYyneoiGdSLRNtFz5BXTORyxHTQ"
    })

    return await cloudinary.uploader.upload(file.path);

  }

    
  @Post("/file")
  @UseInterceptors(FileInterceptor("file", multerConfig))
  async handleUpload(@UploadedFile() file: Express.Multer.File) {
    try {
      console.log(file);
      var result = await this.cloudinaryHandler(file);
      console.log(result);
      return file;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

