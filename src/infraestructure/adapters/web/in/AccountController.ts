import { Controller, Post, Body, Inject } from '@nestjs/common';
import CreateAccountService from 'src/aplication/usesCases/interfaces/CreateAccountService';

@Controller('account')
export default class AccountController {
  constructor(@Inject('CreateAccountUseCase') private _createAccountService: CreateAccountService) {}
  @Post()
  createAccount(@Body() accountBody: any) {
    return this._createAccountService.create(accountBody);
  }
}
