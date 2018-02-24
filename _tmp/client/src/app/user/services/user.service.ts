import User from '../models/user.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  userUrl = `${this.api_url}/api/users`;

  constructor(private http: HttpClient) {
  }


  //Create component, takes a User Object
  createUser(user: User): Observable<any> {
    //returns the observable of http post request
    return this.http.post(`${this.userUrl}`, user);
  }

  //Read component, takes no arguments
  getUsers(): Observable<User[]> {
    return this.http.get(this.userUrl)
      .map(res => {
        //Maps the response object sent from the server
        return res["data"].docs as User[];
      });
  }

  //Update component, takes a User Object as parameter
  editUser(user: User) {
    //returns the observable of http put request
    return this.http.put(`${this.userUrl}`, user);
  }

  //Gets component, takes a id string as parameter
  getUser(id: string) {
    //returns the observable of http put request
    return this.http.get(`${this.userUrl}/${id}`);
  }

  deleteUser(id: string): any {
    //Delete the object by the id
    return this.http.delete(`${this.userUrl}/${id}`)
      .map(res => {
        return res;
      })
  }
}
