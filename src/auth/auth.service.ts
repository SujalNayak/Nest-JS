import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';
import { SignupDto } from './dto/SignupDto.dto';
import { LoginDto } from './dto/LoginDto.dto';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name) private userModel:Model<User>,
        private jwtService:JwtService
    ){}

    async signUp(signupDto:SignupDto){
        const {name,email,password} = signupDto;
        const hashedPassword = await bcrypt.hash(password,10);


        const user = await this.userModel.create({
            name:name,
            email:email,
            password:hashedPassword
        })

        const token = this.jwtService.sign({id:user.name});

        return {token};
    }

    async login(loginDto:LoginDto):Promise<{token:string}>{

        const {email,password} = loginDto;
        const user = await this.userModel.findOne({email})
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            throw new UnauthorizedException('Invalid credentials');
        }

        const token = this.jwtService.sign({id:user._id});
        return {token};
    }

    validateToken(token:string){
        return this.jwtService.verify(token,{
            secret:process.env.JWT_SECRET
        });
    }
}