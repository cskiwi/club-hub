import {User} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {assign} from 'rxjs/util/assign';
import {MongoResponse} from '../../../models/mongo.response';
import {ListResponse} from '../../../models/mongo.list.response';

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  userUrl = `${this.api_url}/api/v1/users`;

  constructor(private http: HttpClient) {
  }


  // Create component, takes a User Object
  createUser(user: User): Observable<any> {
    // returns the observable of http post request
    return this.http.post(`${this.userUrl}`, user);
  }

  // Read component, takes no arguments
  getUsers(): Observable<User[]> {
    return this.http.get(this.userUrl)
      .map((res: MongoResponse<ListResponse<User>>) => res.data.docs)
      .map(y => y.map(x => assign(new User, x)));
  }

  // schemaUpdate component, takes a User Object as parameter
  editUser(user: User) {
    // returns the observable of http put request
    return this.http.put(`${this.userUrl}`, user);
  }

  // Gets component, takes a id string as parameter
  getUser(id: string): Observable<User> {
    // returns the observable of http put request
    return this.http.get(`${this.userUrl}/${id}`)
      .map((res: MongoResponse<User>) => res.data)
      .map(x => assign(new User, x));
  }

  deleteUser(id: string): any {
    // Delete the object by the id
    return this.http.delete(`${this.userUrl}/${id}`)
      .map(res => {
        return res;
      });
  }
}
