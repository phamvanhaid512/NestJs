const bcrypt = require('bcryptjs');
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { DatabaseService } from 'src/db/data-source.module';

@Injectable()
export class AuthService {
  private readonly client: DatabaseService;
  constructor(private usersService: UserService) {
    this.client = new DatabaseService();
  }
  async login(name: string, password: string): Promise<any> {
    const queryFindOne = 'SELECT * FROM user WHERE name = ? ALLOW FILTERING';

    try {
      const user = await this.client.execute(queryFindOne, [name]);
      console.log('user', user[0].password);

      if (user && user[0].password) {
        console.log('hai11');
        const isPasswordValid = await bcrypt.compare(
          password,
          user[0].password,
        );
        console.log('hai2222');

        if (isPasswordValid) {
          return user;
        } else {
          return 'Incorrect Password';
        }
      } else {
        return 'No find User ';
      }
    } catch (error) {
      throw new Error('Error when excute Query ' + error.message);
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
