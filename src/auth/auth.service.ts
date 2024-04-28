import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/User.schema';
import { Model } from 'mongoose';
import { SignupDto } from './dto/SignupDto.dto';
import * as bcrypt from 'bcryptjs';



@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService
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
}
