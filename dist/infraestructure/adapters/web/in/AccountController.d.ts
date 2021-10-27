import CreateAccountService from 'src/aplication/usesCases/interfaces/CreateAccountService';
export default class AccountController {
    private _createAccountService;
    constructor(_createAccountService: CreateAccountService);
    createAccount(accountBody: any): any;
}
