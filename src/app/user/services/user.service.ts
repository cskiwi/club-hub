import {User} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {assign} from 'rxjs/util/assign';

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  userUrl = `${this.api_url}/api/users`;

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
      .map((res) => res.data.docs);
  }

  // Update component, takes a User Object as parameter
  editUser(user: User) {
    // returns the observable of http put request
    return this.http.put(`${this.userUrl}`, user);
  }

  // Gets component, takes a id string as parameter
  getUser(id: string): Observable<User> {
    // returns the observable of http put request
    return this.http.get(`${this.userUrl}/${id}`)
      .map(res => res.data)
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
