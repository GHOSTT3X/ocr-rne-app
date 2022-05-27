import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Form } from './form';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private _http: HttpClient) { }
  

  public loginUser(user :User):Observable<any> {
    return this._http.post<any>("http://localhost:8070/signin", user);
  }

  public registerUser(user :User):Observable<any> {
    return this._http.post<any>("http://localhost:8070/signup", user);
  }

  fetchFormListFromServer():Observable<any>{
    return this._http.get<any>("http://localhost:8070/getformlist");
  }

  addFormToRemote(form: Form):Observable<any>{
    return this._http.post<any>("http://localhost:8070/addform", form)
  }

  fetchFormById(id: number):Observable<any>{
    return this._http.get<any>("http://localhost:8070/getformbyid/  "+ id)
  }

  updateForm(form: Form):Observable<any>{
    return this._http.put<any>("http://localhost:8070/updateform", form);
  }

  deleteForm(id: number): Observable<any>{
    return this._http.delete<any>("http://localhost:8070/deleteformbyid/" + id);
  }
}



