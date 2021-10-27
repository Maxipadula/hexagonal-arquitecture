import ICreateAccountPort from '@ports/account/CreateAccountPort';
import IGetAccountPort from '@ports/account/GetAccountPort';
import AccountDomain from 'src/domain/AccountDomain';
import CreateAccountService from './interfaces/CreateAccountService';
export default class CreateAccountUseCase implements CreateAccountService {
    private _getAccountRepository;
    private _createAccountRepository;
    constructor(_getAccountRepository: IGetAccountPort, _createAccountRepository: ICreateAccountPort);
    create(body: any): AccountDomain;
}
