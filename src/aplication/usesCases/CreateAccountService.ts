import { Inject, Injectable } from '@nestjs/common';
import ICreateAccountPort from '@ports/account/CreateAccountPort';
import IGetAccountPort from '@ports/account/GetAccountPort';
import AccountDomain from 'src/domain/AccountDomain';

@Injectable()
export default class CreateAccountService {
  constructor(
    @Inject('account-repository-token')
    private _getAccountRepository: IGetAccountPort,
    @Inject('account-repository-token')
    private _createAccountRepository: ICreateAccountPort,
  ) {}

  create(body: any) {
    const { id } = body;
    let accountDB = this._getAccountRepository.getById(id);
    if (!accountDB) {
      accountDB = this._createAccountRepository.create(body);
    }
    // Map DB Model --> Account Domain 
    const account = new AccountDomain(accountDB.id, accountDB.attributes); // mapper Mock
    return account;
  }
}
