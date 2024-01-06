import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserResponse } from '../services/userResponse';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private userResponse: any; // Puedes definir el tipo adecuado según tu respuesta
  private userResponseSubject = new BehaviorSubject<UserResponse | null>(null);
  userResponse$ = this.userResponseSubject.asObservable();

  setUserResponse(response: any) {
    this.userResponse = response;
  }

  getUserResponse() {
    return this.userResponse;
  }

  setUserResponseSubject(response: UserResponse) {
    this.userResponseSubject.next(response);
  }

  getUserResponseSubject() {
    return this.userResponseSubject.value;
  }
}
