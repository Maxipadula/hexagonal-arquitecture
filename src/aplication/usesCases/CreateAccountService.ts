import { Inject, Injectable } from '@nestjs/common';
import ICreateAccountPort from '@ports/account/CreateAccountPort';
import IGetAccountPort from '@ports/account/GetAccountPort';

@Injectable()
export default class CreateAccountService {
  constructor(
    @Inject('AccountMysqlRepository')
    private _getAccountRepository: IGetAccountPort,
    @Inject('AccountMysqlRepository')
    private _createAccountRepository: ICreateAccountPort,
  ) {}

  create(body: any) {
    let accountDB = this._getAccountRepository.getById('123-123');
    if (!accountDB) {
      accountDB = this._createAccountRepository.create(body);
    }
    return accountDB;
  }
}
