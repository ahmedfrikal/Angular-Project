export class Pokemon {
  id!:number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
  created: Date;

  toString(): string {
    return this.created.toString();
  }
  constructor( name= 'Entrrez votre nom..', hp=100 , cp=200, picture="WWW.Ahmed.com",types:string[]=['normal'],created:Date=new Date()) {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
  
}
