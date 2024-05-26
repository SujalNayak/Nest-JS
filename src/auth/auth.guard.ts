import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // constructor(private authService: AuthService) {}
  constructor(private jwtService:JwtService){}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    
    try{

      const request = context.switchToHttp().getRequest();
      const {authorization} = request.headers;
      if(!authorization || authorization.trim()===''){
        throw new UnauthorizedException('Please provide a token');
      }
      const authToken = authorization.replace('Bearer ','').trim();
      console.log('authToken',authToken);
      //const resp = this.authService.validateToken(authToken);
      //request.user = resp;
      const resp = this.validateToken(authToken);
      request.user = resp;

      return true;

    }
    catch(e){

      throw new UnauthorizedException(e.message||'Token not valid sign in again');
    }
  }

  validateToken(token:string){
    return this.jwtService.verify(token,{
        secret:process.env.JWT_SECRET
    });
}
  

}