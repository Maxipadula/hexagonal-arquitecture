import ICreateAccountPort from '@ports/account/CreateAccountPort';
import IUpdateAccountPort from '@ports/account/UpdateAccountPort';
import IGetAccountPort from '@ports/account/GetAccountPort';

export default class AccountMysqlRepository
  implements ICreateAccountPort, IUpdateAccountPort, IGetAccountPort
{
  create(body: any): any {
    return `the result is: ${JSON.stringify(body)}`;
  }

  update(): any {
    return {
      updated: 'updated ok',
    };
  }

  getAll(): any {
    return {
      updated: 'get all ok',
    };
  }

  getById(id: string): any {
    return {
      getById: 'getted by id ok -> ' + id,
    };
  }
}
