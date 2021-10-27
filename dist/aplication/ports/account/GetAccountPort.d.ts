export default interface IGetAccountPort {
    getAll(): Promise<any>;
    getById(id: string): any;
}
