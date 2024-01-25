import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { UserResponse } from './userResponse';
import { GenericaResponse } from './genericaResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://kioscoatiempo.com/loginrest';
  //private url = 'http://localhost:8080/loginrest';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }

  postUsers(user:any): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.url+'/in', user, this.httpOptions);
  }

  postProducto(resp:any): Observable<GenericaResponse> {
    return this.http.post<GenericaResponse>(this.url+'/upd', resp, this.httpOptions);
  }
}