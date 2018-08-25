import { Injectable } from '@angular/core';
import {User} from './user';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _postUrl = "/api/user";

  constructor(private _http: Http) { }

  addUser(user: User){
    let headers = new Headers({ 'Content-Type' : 'application/json' });
    let options = new RequestOptions({ headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(user), options)
      .map((response: Response) => response.json());
  }

}
