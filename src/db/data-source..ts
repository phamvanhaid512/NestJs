import { DataSource, DataSourceOptions } from 'typeorm';
import { User} from '../users/entities/user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';+
console.log('chay den day');
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '456RTYfgh!@#',
  database: process.env.DB_DATABASE || 'haipham',
  entities: [User],
  migrations: ['src/db/migration/*.js'],
  synchronize: false,
};
console.log('chay den day');

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
