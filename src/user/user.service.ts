import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
const cassandra = require('cassandra-driver');
import { DatabaseService } from 'src/db/data-source.module';

@Injectable()
export class UserService {
  private readonly client: DatabaseService;

  constructor() {
    this.client = new DatabaseService();
  }

  async createUser(name: string, password: string): Promise<any> {
    const userId = uuid();

    const query = 'INSERT INTO user (id, name, password) VALUES (?, ?, ?)';
    const querySelect = 'SELECT * FROM user WHERE id = ?';
    try {
      await this.client.execute(query, [userId, name, password]);
      const result = await this.client.select(querySelect, [userId]);
      console.log(result);
      return result; // Return the first row from the result
    } catch (error) {
      throw new Error('Error when creating user: ' + error.message);
    }
  }
  async getUserById(userId: string) {
    console.log('213');

    const query = 'SELECT * FROM user WHERE id = ?';
    const result = await this.client.select(query, [userId]);
    return result;
  }
  async updateUser(
    userId: string,
    name: string,
    password: string,
  ): Promise<any> {
    try {
      const query = 'UPDATE user SET name = ?, password = ? WHERE id = ?';
      const querySelect = 'SELECT * FROM user WHERE id = ?';
      await this.client.execute(query, [name, password, userId]);
      const result = await this.client.select(querySelect, [userId]);
      return result;
    } catch (error) {
      throw new Error('Lỗi khi update người dùng: ' + error.message);
    }
  }
  async deleteUser(userId: string): Promise<string> {
    const query = 'DELETE FROM user WHERE id = ?';
    try {
      const result = await this.client.execute(query, [userId]);
      // if (!result) {
      //   console.log('khong xoa duoc');
      // }
      console.log(result);
      console.log('Delte Success');
      return 'Delete Success';
    } catch (error) {
      console.error('Bug when delete user :', error);
      throw error; // Nếu bạn muốn ném lại lỗi cho bên gọi hàm xử lý
    }
  }
}

// import { Injectable } from '@nestjs/common';
// // // import { v4 as uuidv4 } from 'uuid';
// import { uuid } from 'uuidv4';
// const cassandra = require('cassandra-driver');

// @Injectable()
// export class UserService {
//   private readonly client = new cassandra.Client({
//     contactPoints: ['localhost'],
//     keyspace: 'table_user',
//     localDataCenter: 'datacenter1',
//   });

//  async createUser(name: string, password: string): Promise<string> {
//     const userId = uuid();
//     const query = 'INSERT INTO user (id, name, password) VALUES (?, ?, ?)';
//     const querySelect = 'SELECT * FROM user WHERE id = ?';
//     try {
//       await this.client.execute(query, [userId, name, password]);
//       const result = await this.client.execute(querySelect, [userId]);
//       if (result.rows.length === 1) {
//         const user = result.rows[0];
//         return user; // Trả về thông tin người dùng vừa được tạo
//       } else {
//         throw new Error('Không thể lấy thông tin người dùng sau khi tạo');
//       }
//     } catch (error) {
//       throw new Error('Lỗi khi tạo người dùng: ' + error.message);
//     }
//   }
//   async getUserById(userId: string) {
//     console.log('213');

//     const query = 'SELECT * FROM user WHERE id = ?';
//     const result = await this.client.execute(query, [userId]);
//     return result
//   }
//   async updateUser(
//     userId: string,
//     name: string,
//     password: string,
//   ):  Promise<string>  {
//     try {
//       const query = 'UPDATE user SET name = ?, password = ? WHERE id = ?';
//       const querySelect = 'SELECT * FROM user WHERE id = ?';
//       await this.client.execute(query, [name, password, userId]);
//       const result = await this.client.execute(querySelect, [userId]);
//       console.log('dfdf');
//         const user = result.rows[0];
//         return user;

//     } catch (error) {
//       throw new Error('Lỗi khi update người dùng: ' + error.message);
//     }
//   }
//   async deleteUser(userId: string): Promise<string> {
//     const query = 'DELETE FROM user WHERE id = ?';
//     try {
//       const result = await this.client.execute(query, [userId]);
//       if (!result) {
//         console.log('khong xoa duoc');
//       }
//       console.log('Xóa thành công');
//       return 'Xóa thành công';
//     } catch (error) {
//       console.error('Lỗi khi xóa người dùng:', error);
//       throw error; // Nếu bạn muốn ném lại lỗi cho bên gọi hàm xử lý
//     }
//   }
// }
