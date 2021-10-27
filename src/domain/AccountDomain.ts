export default class AccountDomain {
  private id: string;
  private cvu: string;
  private alias: string;
  private data: any; // Example other data

  constructor(id:string, data:any){
    this.id = id;
    this.data = data;
  }

  createCvu(cvu: string, alias: string): AccountDomain {
    this.cvu = cvu;
    this.alias = alias;
    return this;
  }

}
