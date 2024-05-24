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
 
  private apiUrl ='http://localhost:8080';
   /*'https://planificacion-backend-production.up.railway.app'*/


  constructor(private http: HttpClient) { }


  obtenerRendicion(): Observable<Rendicion[]> {
    return this.http.get<Rendicion[]>(`${this.apiUrl}/rendicion/ver`);

  };

  obtenerPrestaciones(): Observable<Prestacion[]>{
    return this.http.get<Prestacion[]>(`${this.apiUrl}/prestaciones/ver`);
  }
  
  getInscriptos(): Observable<Inscriptos[]>{
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos/ver`);
  };
  getInscriptosCeb(): Observable<Inscriptos[]>{
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos_ceb/ver`);
  };

  getPrestacionesMonto(): Observable<Prestacion_monto[]>{
    return this.http.get<Prestacion_monto[]>(`${this.apiUrl}/prestaciones_monto/ver`);
  };

  getPrestacionesTipo(): Observable<Prestacion_tipo[]>{
    return this.http.get<Prestacion_tipo[]>(`${this.apiUrl}/prestaciones_tipo`)
  };

  getTrazadoras(): Observable<Trazadoras[]>{
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_1c2022/ver`)
  };
  getTrazadoras2c22(): Observable<Trazadoras[]>{
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_2c2022/ver`)
  }
  getTrazadoras3c22(): Observable<Trazadoras[]>{
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_3c2022/ver`)
  }
  getTrazadoras1c23(): Observable<Trazadoras[]>{
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_1c2023/ver`)
  };
  getTrazadoras2c23(): Observable<Trazadoras[]>{
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_2c2023/ver`)
  };
  getTrazadoras3c23(): Observable<Trazadoras[]>{
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_3c2023/ver`)
  };
  
  

}
