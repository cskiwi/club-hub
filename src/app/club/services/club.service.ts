import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../_common/services/base.service';
import {Club} from '../models/club.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ClubService extends BaseService<Club> {
  service_url = `${this.api_url}api/v1/clubs`;
  type = new Club();

  constructor(private http: HttpClient) {
    super(http);
  }

  addUser(userId: string){
    return this.http.post(`${this.service_url}`, userId);

  }

}
