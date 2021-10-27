import CreateAccountService from 'src/aplication/usesCases/CreateAccountService';
export default class AccountController {
    private _createAccountService;
    constructor(_createAccountService: CreateAccountService);
    createAccount(accountBody: any): import("../../../../domain/AccountDomain").default;
}
