import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

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
}
