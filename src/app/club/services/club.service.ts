import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../_shared/services/base.service';
import {Club} from '../models/club.model';
import {User} from '../../user/models/user.model';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable()
export class ClubService extends BaseService<Club> {
  service_url = `${this.api_url}api/v1/clubs`;
  type = new Club();

  constructor(protected http: HttpClient) {
    super(http);
  }


  addUser(club: Club, user: string | User) {
    const userId = (user as User)._id || user;
    return this.http.post(`${this.service_url}/${club._id}/add-user`, {uid: userId});
  }

  removeUser(club: Club, user: string | User) {
    const userId = (user as User)._id || user;

    return this.http.delete(`${this.service_url}/${club._id}/remove-user/${userId}`);
  }


}
