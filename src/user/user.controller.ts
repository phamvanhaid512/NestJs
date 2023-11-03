import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Res,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('password') password: string,
  ) {
    return await this.userService.createUser(name, password);
    
  }
  @Get(':id')
  async getUser(@Param('id') userId: string) {
    const result = await  this.userService.getUserById(userId);
    console.log(result);
    return result;

  }
  @Put(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body('name') name: string,
    @Body('password') password: string,
  ) {
    const result = await this.userService.updateUser(userId, name, password);
    return result;
  }
  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    const result = await this.userService.deleteUser(userId);
    return result;

  }
}
