import Address from './adress.model';

class User {
  constructor(
    public _id?: string,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public address?: Address
  ) {
    this.address = address || new Address();
  }
}

export default User;
