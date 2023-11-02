import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User,Pet } from './users/entities/user.entity';
// import {dataSourceOptions} from './db/data-source.';
import { PetModule } from './pet/pet.module';
@Module({
  imports: [ 
    UsersModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
