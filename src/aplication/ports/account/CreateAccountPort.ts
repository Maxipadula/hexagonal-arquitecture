export default interface ICreateAccountPort {
  create(body: any): Promise<any>;
}
