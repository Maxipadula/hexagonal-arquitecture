import { Injectable } from '@nestjs/common';
import AccountMysqlRepository from 'src/infraestructure/adapters/repository/AccountMysqlRepository';

@Injectable()
export default class CreateAccountService {
  constructor(
    // @Inject('AccountMysqlRepository')
    private _getAccountRepository: AccountMysqlRepository,
    // @Inject('AccountMysqlRepository')
    private _createAccountRepository: AccountMysqlRepository,
  ) {}

  create(body: any) {
    let accountDB = this._getAccountRepository.getById('123-123');
    if (!accountDB) {
      accountDB = this._createAccountRepository.create(body);
    }
    return accountDB;
  }
}
