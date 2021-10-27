import ICreateAccountPort from '@ports/account/CreateAccountPort';
import IUpdateAccountPort from '@ports/account/UpdateAccountPort';
import IGetAccountPort from '@ports/account/GetAccountPort';
export default class AccountMysqlRepository implements ICreateAccountPort, IUpdateAccountPort, IGetAccountPort {
    create(body: any): any;
    update(): any;
    getAll(): any;
    getById(id: string): any;
}
