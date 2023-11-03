import { DataSource } from 'typeorm';
import { Vasdsd1698722767660 } from '../db/migration/1698722767660-vasdsd';

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'haipham',
  password: process.env.DB_PASSWORD || '456RTYfgh!@#',
  database: process.env.DB_NAME || 'haipham',
  logging: false,
  migrations: [Vasdsd1698722767660]
});
// orm-test.module.ts
