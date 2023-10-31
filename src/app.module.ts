import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User,Pet } from './users/entities/user.entity';
// import {dataSourceOptions} from './db/data-source.';
import { PetModule } from './pet/pet.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password:'456RTYfgh!@#',
      database:'haipham',
      entities:[User,Pet],
      migrations: ['dist/db/migration/*.js'],
      synchronize:true
    }),
    // TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    PetModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
