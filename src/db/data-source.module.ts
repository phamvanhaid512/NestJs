import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
const cassandra = require('cassandra-driver');

@Injectable()
export class DatabaseService {
  private readonly client = new cassandra.Client({
    contactPoints: ['localhost'],
    keyspace: 'table_user',
    localDataCenter: 'datacenter1',
  });
  async execute(query: string, params: any[]): Promise<any> {
    try {
      const result =   await this.client.execute(query, params);
      return result.rows;
    } catch (error) {
      throw new Error('Database error: ' + error.message);
    }
  }
  // async select(props:{query: string, params: any[]}): Promise<any[]> {
  //const {query,params} = 
  //   try {
  //     const result = await this.client.execute(query, params);
  //     return result.rows;
  //   } catch (error) {
  //     throw new Error('Database error: ' + error.message);
  //   }
  // }
  async select(query: string, params: any[]): Promise<any[]> {
    try {
      const result = await this.client.execute(query, params);
      return result.rows;
    } catch (error) {
      throw new Error('Database error: ' + error.message);
    }
  }
}
// import { DataSource, DataSourceOptions } from 'typeorm';
// import { User} from '../users/entities/user.entity';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';+
// console.log('chay den day');
// export const dataSourceOptions: DataSourceOptions = {
//   type: 'mysql',
//   host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT, 10) || 3306,
//   username: process.env.DB_USERNAME || 'root',
//   password: process.env.DB_PASSWORD || '456RTYfgh!@#',
//   database: process.env.DB_DATABASE || 'haipham',
//   entities: [User],
//   migrations: ['src/db/migration/*.js'],
//   synchronize: false,
// };
// console.log('chay den day');

// const dataSource = new DataSource(dataSourceOptions);
// export default dataSource;
// import { Module } from '@nestjs/common';
// import { CassandraModule } from '@mich4l/nestjs-cassandra';

// export const ConnectionCassandra =  CassandraModule.forRoot({
//     keyspace: 'table_user',
//     contactPoints: ['localhost'],
//     localDataCenter: 'datacenter1',
//   });
