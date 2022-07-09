import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, Observable, pipe } from 'rxjs';

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
        
      };
  public getTransferencias(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/transferencias`);
    };

    public fromMunicipioT(municipio: any) :Observable<any[]> {
      return this.getTransferencias().pipe(map(data=> data.filter(m=> m.municipio===municipio)));
          /*  data.map(res => res.municipio))) */
          
        };



  }