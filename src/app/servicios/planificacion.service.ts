import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscriptos, Prestacion, Prestacion_monto, Prestacion_tipo, Rendicion, Trazadoras } from '../components/interfaces/planificacio.interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'CORS':'*'

  }),
};


@Injectable({
  providedIn: 'root'
})
export class PlanificacionService {
 
  private apiUrl = 'http://localhost:5001';


  constructor(private http: HttpClient) { }


  obtenerRendicion(): Observable<Rendicion[]> {
    return this.http.get<Rendicion[]>(`${this.apiUrl}/rendicion/ver`);

  };

  obtenerPrestaciones(): Observable<Prestacion[]>{
    return this.http.get<Prestacion[]>(`${this.apiUrl}/prestaciones/ver`);
  }
  
  getInscriptos(): Observable<Inscriptos[]>{
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos`);
  };
  getInscriptosCeb(): Observable<Inscriptos[]>{
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos_ceb`);
  };

  getPrestacionesMonto(): Observable<Prestacion_monto[]>{
    return this.http.get<Prestacion_monto[]>(`${this.apiUrl}/prestaciones_monto/ver`);
  };

  getPrestacionesTipo(): Observable<Prestacion_tipo[]>{
    return this.http.get<Prestacion_tipo[]>(`${this.apiUrl}/prestaciones_tipo`)
  };

  getTrazadoras(): Observable<Trazadoras[]>{
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_1c2022`)
  }
  

}
