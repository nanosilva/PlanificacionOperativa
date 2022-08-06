import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, pipe } from 'rxjs';
import { municipio, Prestacion, Rendicion } from '../components/interfaces/planificacio.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ChartsService {
    muni_ini!: String ;


  private municipio$= new BehaviorSubject<any>(this.muni_ini);

  private apiUrl = 'http://localhost:5001';

  constructor(private http: HttpClient ) {}


  get selectedmunicipio$(): Observable<any> {
    return this.municipio$.asObservable();
  }

  setMunicipio(municipio: Rendicion): void {
    this.municipio$.next(municipio);
  }

  public getRendicion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rendicion`);
  }

  public fromMunicipio(municipio: any): Observable<any[]> {
    return this.getRendicion().pipe(map(data => data.filter(m => m.municipio === municipio)));

    /*  data.map(res => res.municipio))) */

  };
  public getTransferencias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transferencias`);
  };

  public fromMunicipioT(municipio: any): Observable<any[]> {
    return this.getTransferencias().pipe(map(data => data.filter(m => m.municipio === municipio)));
    /*  data.map(res => res.municipio))) */

  };
  public getPrestaciones(): Observable<Prestacion[]> {
    return this.http.get<Prestacion[]>(`${this.apiUrl}/prestaciones`)
  };

  public fromMunicipioP(municipio: any): Observable<any[]> {
    return this.getPrestaciones().pipe(map(data => data.filter(m => m.municipio === municipio)));
  }
  public getPrestacionesgp(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prestaciones_gp_2022q`);
  };

  public fromMunicipioGp(municipio: any): Observable<any[]> {
    return this.getPrestacionesgp().pipe(map(data => data.filter(m => m.municipio === municipio)));
  }


}
