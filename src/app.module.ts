import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  providers: [AppController ],
  controllers: [AppService],
})
export class AppModule { }
