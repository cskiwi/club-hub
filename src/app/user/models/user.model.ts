import {Address} from './adress.model';
import {Sport} from './sport.model';
import {MongoBase} from '../../_common/models/mongo-base';

export class User extends MongoBase {
  constructor(
    public _id?: string,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public addresses?: Address[],
    public sports?: Sport[]
  ) {
    super(_id);
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

