import ICreateAccountPort from '@ports/account/CreateAccountPort';
import IGetAccountPort from '@ports/account/GetAccountPort';
export default class CreateAccountService {
    private _getAccountRepository;
    private _createAccountRepository;
    constructor(_getAccountRepository: IGetAccountPort, _createAccountRepository: ICreateAccountPort);
    create(body: any): Promise<any>;
}
