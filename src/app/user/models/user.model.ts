import {Address} from './adress.model';
import {Sport} from './sport.model';

export class User {
  constructor(
    public _id?: string,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public addresses?: Address[],
    public sports?: Sport[]
  ) {
    this.addresses = addresses || [new Address()];
  }

  get fullName(): string {
    return `${this.firstName}, ${this.lastName}`;
  }

  get sportNames(): string {
    if (!this.sports) {
      return null;
    }
    return this.sports.map(x => x.title).join(', ');
  }
}

