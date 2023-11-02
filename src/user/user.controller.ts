// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.userService.create(createUserDto);
//   }

//   @Get()
//   findAll() {
//     return 'pham vanhaidf';
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.userService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.userService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.userService.remove(+id);
//   }
// }
import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body('username') username: string, @Body('email') email: string) {
    await this.userService.createUser(username, email);
  }
@Get()
getAll() {
  return  'haipha';
}
  @Get(':id')
  async getUser(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Put(':id')
  async updateUser(@Param('id') userId: string, @Body('username') username: string, @Body('email') email: string) {
    await this.userService.updateUser(userId, username, email);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    await this.userService.deleteUser(userId);
  }
}
