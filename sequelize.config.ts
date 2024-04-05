import { SequelizeOptions } from 'sequelize-typescript';

const config: SequelizeOptions = {
  database: 'teamnis',
  username: 'root',
  password: 'root',
  host: 'teamnis_db',
  dialect: 'mysql',
  port: 3306,
  models: [__dirname + '/src/**/*.model.ts'],
};

export default config;
