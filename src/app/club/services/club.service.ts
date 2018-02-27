import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../_common/services/base.service';
import {Club} from '../models/club.model';

@Injectable()
export class ClubService extends BaseService<Club> {
  service_url = `${this.api_url}api/v1/clubs`;
  type = new Club();

  constructor(http: HttpClient) {
    super(http);
  }
}
