import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://planificacion-backend-production.up.railway.app';

  constructor(private http: HttpClient) { }

  authenticateUser(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario, httpOptions);

  };

  logLout() {
    sessionStorage.removeItem('usuario')

  };

  isLoggedIn() {
    let usuario = sessionStorage.getItem('usuario')
    console.log(!(usuario === null))
    return !(usuario === null)
  }


}
