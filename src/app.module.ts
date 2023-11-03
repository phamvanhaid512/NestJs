import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CassandraModule } from '@mich4l/nestjs-cassandra';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // CassandraModule.forRoot({
    //   keyspace: 'table_user',
    //   contactPoints: ['localhost'],
    //   localDataCenter: 'datacenter1',
    // }),
  UserModule,
  PostModule,
  AuthModule
],
  controllers:[AppController],
  providers:[AppService ]
})
export class AppModule {}