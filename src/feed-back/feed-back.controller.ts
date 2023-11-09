import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedBackService } from './feed-back.service';
import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { UpdateFeedBackDto } from './dto/update-feed-back.dto';

@Controller('feed-back')
export class FeedBackController {
  constructor(private readonly feedBackService: FeedBackService) {}

  // @Post()
  // create(@Body() createFeedBackDto: CreateFeedBackDto) {
  //   return this.feedBackService.create(createFeedBackDto);
  // }

  // @Get()
  // findAll() {
  //   return this.feedBackService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.feedBackService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFeedBackDto: UpdateFeedBackDto) {
  //   return this.feedBackService.update(+id, updateFeedBackDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.feedBackService.remove(+id);
  // }
}
