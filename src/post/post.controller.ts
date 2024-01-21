import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(
    // @Body('content') content: string,
    // @Body('logo') logo: string,
    // @Body('name') name: string,
    // @Body('title') title: string,
    @Body(new ValidationPipe()) createPostDto: CreatePostDto,
  ) {
    const result = await this.postService.createPost(createPostDto);
    return result;
  }
  @Get(':id')
  async getPost(@Param('id') postId: string) {
    const result = await this.postService.getPostById(postId);
    console.log(result);
    return result;
      // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }
    // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }  // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }
  }
  @Delete(':id')
  async DeletePost(@Param('id') postId: string) {
    const result = await this.postService.DeletePostId(postId);
    console.log(result);
    return result;
      // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }
  }
  // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
