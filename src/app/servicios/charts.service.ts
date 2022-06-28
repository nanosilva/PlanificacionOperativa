import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, Observable, pipe } from 'rxjs';
import { Rendicion } from '../components/interfaces/planificacio.interfaces';
import { RendicionComponent } from '../components/rendicion/rendicion.component';
import { data } from 'autoprefixer';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private apiUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  public getRendicion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rendicion`);
  };

  public fromMunicipio(municipio: any) :Observable<any[]> {
    return this.getRendicion().pipe(map(data=> data.filter(m=> m.municipio===municipio)));
        /*  data.map(res => res.municipio))) */
        
      }
    };






  







