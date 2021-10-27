import AccountMysqlRepository from 'src/infraestructure/adapters/repository/AccountMysqlRepository';
export default class CreateAccountService {
    private _getAccountRepository;
    private _createAccountRepository;
    constructor(_getAccountRepository: AccountMysqlRepository, _createAccountRepository: AccountMysqlRepository);
    create(body: any): any;
}
