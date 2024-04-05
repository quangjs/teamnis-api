import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql', // or any other dialect
      host: 'teamnis_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'teamnis',
      autoLoadModels: true,
      synchronize: true, // set to false in production
      models: [User],
    }),
    SequelizeModule.forFeature([User]), // register models
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
