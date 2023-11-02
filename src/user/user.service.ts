// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UserService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {

//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
// import { Injectable } from '@nestjs/common';

// import { CreateUserDto} from './dto/create-user.dto';
// import {UpdateUserDto } from './dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
const cassandra = require('cassandra-driver');

@Injectable()
export class UserService {
  private readonly client = new cassandra.Client({   contactPoints: ['localhost'], keyspace: 'table_user',  localDataCenter: 'datacenter1' });

  async createUser(username: string, email: string): Promise<void> {
    const userId = uuidv4();
    const query = 'INSERT INTO user (id, username, email) VALUES (?, ?, ?)';
    await this.client.execute(query, [userId, username, email]);
  }

  async getUserById(userId: string) {
    const query = 'SELECT * FROM user WHERE id = ?';
    const result = await this.client.execute(query, [userId]);
    return result.rows[0];
  }

  async updateUser(userId: string, username: string, email: string): Promise<void> {
    const query = 'UPDATE user SET username = ?, email = ? WHERE id = ?';
    await this.client.execute(query, [username, email, userId]);
  }

  async deleteUser(userId: string): Promise<void> {
    const query = 'DELETE FROM user WHERE id = ?';
    await this.client.execute(query, [userId]);
  }
}
