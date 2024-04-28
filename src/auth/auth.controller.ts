
import { AuthService } from './auth.service';
import { Controller, Get, Post, Req,Body } from '@nestjs/common';
import { SignupDto } from './dto/SignupDto.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/signup')
    signup(@Body()signupDto :SignupDto){

        return this.authService.signUp(signupDto);
    }

}