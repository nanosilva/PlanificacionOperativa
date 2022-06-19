import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { Rendicion } from '../components/interfaces/planificacio.interfaces';
import { RendicionComponent } from '../components/rendicion/rendicion.component';
import { data } from 'autoprefixer';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private apiUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  public getRendicion(): Observable<Rendicion[]> {
    return this.http.get<Rendicion[]>(`${this.apiUrl}/rendicion`);
  };

  /*  public fromMunicipio(municipio: string): Observable<any[]> {
    return this.getRendicion().pipe(map(data => 
        data.map(res => res.municipio)))
        
      }
    };






  ;*/}







