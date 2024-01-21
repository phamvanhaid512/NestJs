import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
  // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }
@Module({
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
