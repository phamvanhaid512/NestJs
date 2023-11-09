import { Injectable } from '@nestjs/common';
import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { UpdateFeedBackDto } from './dto/update-feed-back.dto';
import { DatabaseService } from 'src/db/data-source.module';
@Injectable()
export  class FeedBackService {
  private readonly client: DatabaseService;
  constructor() {
    this.client = new DatabaseService();
  }
  async getUserId(name:string) : Promise <any>  {
    const query = 'SELECT id FROM user WHERE name = ?';
    const params = [name];
    const result = await this.client.execute(query, params);
    if (result.rows.length > 0) {
      return result.rows[0].id;
    }
    return null;
  }
  async getPostId(title:string) : Promise <any> {
    const query = 'SELECT id FROM post WHERE title = ?';
    const params = [title ];
    const result = await this.client.execute(query,params);
    if(result.rows.length > 0) {
      return result.rows[0].id;
    }
    return null;
  }
 // Hàm tạo phản hồi
// async createFeedback(user_id, title, rate, content) {
//   const user_id = await getUserId(username);
//   const post_id = await getPostId(postTitle);

//   if (user_id && post_id) {
//     const feedbackDto = new CreateFeedbackDto(user_id, post_id, rate, content);
//     const query = 'INSERT INTO feedbacks (user_id, post_id, rate, content) VALUES (?, ?, ?, ?)';
//     const params = [feedbackDto.user_id, feedbackDto.post_id, feedbackDto.rate, feedbackDto.content];
  
//     try {
//       await client.execute(query, params, { prepare: true });
//       console.log('Phản hồi đã được lưu vào Cassandra.');
//     } catch (error) {
//       console.error('Lỗi khi lưu phản hồi vào Cassandra:', error);
//     }
//   } else {
//     console.error('Không tìm thấy thông tin người dùng hoặc bài đăng.');
//   }
// }
  // create(createFeedBackDto: CreateFeedBackDto) {
  //   return 'This action adds a new feedBack';
  // }

  // findAll() {
  //   return `This action returns all feedBack`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} feedBack`;
  // }

  // update(id: number, updateFeedBackDto: UpdateFeedBackDto) {
  //   return `This action updates a #${id} feedBack`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} feedBack`;
  // }
}
