import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private apiUrl= 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  dataRendicion(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/rendicion`);
  }




}
