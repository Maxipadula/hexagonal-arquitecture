import { Controller, Post, Body } from '@nestjs/common';
import CreateAccountService from 'src/aplication/usesCases/CreateAccountService';

@Controller('account')
export default class AccountController {
  constructor(private _createAccountService: CreateAccountService) {}
  @Post()
  createAccount(@Body() accountBody: any) {
    console.log('HEREEEE', JSON.stringify(this._createAccountService));
    return this._createAccountService.create(accountBody);
  }
}
