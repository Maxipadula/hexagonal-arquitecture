import { Module } from '@nestjs/common';
import CreateAccountUseCase from './aplication/usesCases/CreateAccountUseCase';
import AccountMysqlRepository from './infraestructure/adapters/repository/AccountMysqlRepository';
import AccountController from './infraestructure/adapters/web/in/AccountController';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [
    {
      provide: CreateAccountUseCase.name,
      useClass: CreateAccountUseCase
    },
    {
      provide: 'account-repository-token',
      useClass: AccountMysqlRepository
    }
  ],
})
export class AppModule {}
