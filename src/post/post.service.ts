import { Injectable } from '@nestjs/common';

import { uuid } from 'uuidv4';
import { DatabaseService } from 'src/db/data-source.module';
const cassandra = require('cassandra-driver');
@Injectable()
export class PostService {
  private readonly client: DatabaseService;
  constructor() {
    this.client = new DatabaseService();
  }
  async createPost(title: string, name: string, logo: string, content:string) {
    const postId = uuid();
   
    const query = 'INSERT INTO post (id,content , logo,name,title ) VALUES (?, ?, ?)';
    const querySelect = 'SELECT * FROM post  WHERE id = ?';
    try {
      await this.client.execute(query, [postId,title, name, logo, content]);
      const result = await this.client.select(
        querySelect,[postId]
      );
      return result;
    } catch (error) {
      throw new Error('Error when creating post : ' + error.message);
    }
  }
  async getPostById(postId:string) {
    const query = 'SELECT * FROM post WHERE id = ?';
    const result = await this.client.select(query,[postId]);
    return result;
  }
  async DeletePostId(postId:string) {
    const query = 'DELETE FROM post WHERE id = ?';
    const result = await this.client.select(query,[postId]);
    return "Delete success";
  }
}

