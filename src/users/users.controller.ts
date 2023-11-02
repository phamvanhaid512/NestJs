import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
console.log('df');

@Controller('users')
export class UsersController {
  constructor(private readonly usersService:UsersService) {
    
  }
  @Get()
  findAll() {
    return "hai pham";
  }
}
