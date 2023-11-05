import { Controller, Request, Body, Post, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
@Controller('user')
export class AuthController {
  constructor(private readonly authService :AuthService ) {}
  @Post('login')
  async loginUser(
    @Body('name') name: string,
    @Body('password') password: string,
    @Res() res: any
  ) {
    const user = await this.authService.login(name,password);
    // return user;
    res.json(user)
  }
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return req.user;
  // }

}