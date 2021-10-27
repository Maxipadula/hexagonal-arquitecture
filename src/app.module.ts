import { Module } from '@nestjs/common';
import CreateAccountService from './aplication/usesCases/CreateAccountService';
import AccountMysqlRepository from './infraestructure/adapters/repository/AccountMysqlRepository';
import AccountController from './infraestructure/adapters/web/in/AccountController';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [
    {
      provide: CreateAccountService.name,
      useClass: CreateAccountService
    },
    {
      provide: AccountMysqlRepository.name,
      useClass: AccountMysqlRepository
    }
  ],
})
export class AppModule {}
