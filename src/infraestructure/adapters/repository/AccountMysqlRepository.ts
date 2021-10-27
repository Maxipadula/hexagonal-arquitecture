import ICreateAccountPort from '@ports/account/CreateAccountPort';
import IUpdateAccountPort from '@ports/account/UpdateAccountPort';
import IGetAccountPort from '@ports/account/GetAccountPort';

export default class AccountMysqlRepository
  implements ICreateAccountPort, IUpdateAccountPort, IGetAccountPort
{
  create(body: any): any {
    return {
      id: body.id || 1,
      attributes: body.data || { 'foo': 'bar'}
    };
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
    console.log('Id Not found')
    return false;
  }
}
