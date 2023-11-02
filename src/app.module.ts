import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CassandraModule } from '@mich4l/nestjs-cassandra';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    CassandraModule.forRoot({
      keyspace: 'table_user',
      contactPoints: ['localhost'],
      localDataCenter: 'datacenter1',
    }),
  UserModule,
  PostModule],
  controllers:[AppController],
  providers:[AppService ]
})
export class AppModule {}