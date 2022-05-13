import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public loginUser(user :User):Observable<any> {
    return this._http.post<any>("http://localhost:8070/signin", user)
  }

  public registerUser(user :User):Observable<any> {
    return this._http.post<any>("http://localhost:8070/signup", user)
  }

}



