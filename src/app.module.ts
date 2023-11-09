import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CassandraModule } from '@mich4l/nestjs-cassandra';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import {AuthService } from './auth/auth.service';
import { FeedBackModule } from './feed-back/feed-back.module';
@Module({
  imports: [
  UserModule,
  PostModule,
  AuthModule,
  FeedBackModule,

],
  controllers:[AppController],
  providers:[AppService  ]
})
export class AppModule {}