import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

import 'rxjs/add/operator/map';
import {assign} from 'rxjs/util/assign';
import {MongoResponse} from '../../../models/mongo.response';
import {ListResponse} from '../../../models/mongo.list.response';
import {MongoBase} from '../models/mongo-base';
import {cloneDeep} from 'lodash';

export class BaseService<T extends MongoBase> {

  api_url = environment.api_url;
  service_url = '';
  type: T;

  constructor(protected http: HttpClient) {
  }


  // Create component, takes a T Object
  public create(user: T): Observable<any> {
    // returns the observable of http post request
    return this.http.post(`${this.service_url}`, user);
  }

  // Read component, takes no arguments
  public list(): Observable<T[]> {
    return this.http.get(this.service_url)
      .map((res: MongoResponse<ListResponse<T>>) => res.data.docs)
      .map(y => y.map(x => assign(cloneDeep(this.type), x)));
  }

  // schemaUpdate component, takes a T Object as parameter
  public update(user: T) {
    // returns the observable of http put request
    return this.http.put(`${this.service_url}`, user).map((x: any) => x.data._id);
  }

  // Gets component, takes a id string as parameter
  public read(id: string): Observable<T> {
    // returns the observable of http put request
    return this.http.get(`${this.service_url}/${id}`)
      .map((res: MongoResponse<T>) => res.data)
      .map(x => assign(cloneDeep(this.type), x));
  }

  public delete(id: string): any {
    // Delete the object by the id
    return this.http.delete(`${this.service_url}/${id}`)
      .map(res => {
        return res;
      });
  }
}
