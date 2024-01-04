import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private userResponse: any; // Puedes definir el tipo adecuado según tu respuesta

  setUserResponse(response: any) {
    this.userResponse = response;
  }

  getUserResponse() {
    return this.userResponse;
  }
}
