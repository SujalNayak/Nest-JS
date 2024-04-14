import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  users:any = [
    {
      id:1,
      name:"Sujal Nayak",
      age:20
    },
    {
      id:2,
      name:"Vedant Patel",
      age:22
    }
  ]
  getHello(): string {
    return 'Hello World!';
  }

  getAllUsers():any{
    return this.users;
  }

  addUser(user:any):any{
    this.users.push(user);
    return this.users;
  }
  

}
