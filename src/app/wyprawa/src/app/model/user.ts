export class User {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get hobbys(): string[] {
    return this._hobbys;
  }

  set hobbys(value: string[]) {
    this._hobbys = value;
  }
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _hobbys: string[];
}
