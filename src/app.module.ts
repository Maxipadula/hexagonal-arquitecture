import { Module } from '@nestjs/common';
import CreateAccountService from './aplication/usesCases/CreateAccountService';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AccountMysqlRepository from './infraestructure/adapters/repository/AccountMysqlRepository';
import AccountController from './infraestructure/adapters/web/in/AccountController';

@Module({
  imports: [],
  controllers: [AppController, AccountController],
  providers: [AppService, CreateAccountService, AccountMysqlRepository],
})
export class AppModule {}
