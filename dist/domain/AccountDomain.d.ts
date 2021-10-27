export default class AccountDomain {
    private id;
    private cvu;
    private alias;
    private data;
    constructor(id: string, data: any);
    createCvu(cvu: string, alias: string): AccountDomain;
}
