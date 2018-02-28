import {User} from '../../user/models/user.model';

export class Club {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public abbreviation?: string,
    public users?: User[]
  ) {
  }
}
