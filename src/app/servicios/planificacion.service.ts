import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendicion } from '../components/interfaces/planificacio.interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  }),
};


@Injectable({
  providedIn: 'root'
})
export class PlanificacionService {

  private apiUrl= 'http://localhost:5001';


  constructor(private http: HttpClient) { }


  obtenerRendicion():Observable<Rendicion[]>{
    return this.http.get<Rendicion[]>(`${this.apiUrl}/rendicion`);

  };

  
}
