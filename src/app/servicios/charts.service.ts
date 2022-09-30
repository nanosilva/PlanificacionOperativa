import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, pipe } from 'rxjs';
import { Inscriptos, Inscriptos_gp, municipio, Prestacion, Rendicion, Transferencias, usodefondos } from '../components/interfaces/planificacio.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ChartsService {
 
  
  muni_ini!: String;


  private municipio$ = new BehaviorSubject<any>(this.muni_ini);

  private apiUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) { }


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
  public getTransferencias(): Observable<Transferencias[]> {
    return this.http.get<Transferencias[]>(`${this.apiUrl}/transferencias`);
  };

  public fromMunicipioT(municipio: any): Observable<any[]> {
    return this.getTransferencias().pipe(map(data => data.filter(m => m.municipio === municipio)));
    /*  data.map(res => res.municipio))) */

  };
  public getPrestaciones(): Observable<Prestacion[]> {
    return this.http.get<Prestacion[]>(`${this.apiUrl}/prestaciones`)
  };
  public getPrestacionesMonto(): Observable<Prestacion[]>{
    return this.http.get<Prestacion[]>(`${this.apiUrl}/prestaciones_monto`)

  };

  public fromMunicipioPm(municipio: any):Observable<any[]>{
    return this.getPrestacionesMonto().pipe(map(data=>data.filter(m=>m.municipio===municipio)));

  };

  public fromMunicipioP(municipio: any): Observable<any[]> {
    return this.getPrestaciones().pipe(map(data => data.filter(m => m.municipio === municipio)));
  };
  
  public getPrestacionesgp(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prestaciones_gp_2022q`);
  };

  public fromMunicipioGp(municipio: any): Observable<any[]> {
    return this.getPrestacionesgp().pipe(map(data => data.filter(m => m.municipio === municipio)));
  };

  public getUsodefondos(): Observable<usodefondos[]> {
    return this.http.get<usodefondos[]>(`${this.apiUrl}/uso_de_fondos`)
  };
  public fromMunicipioUsof(municipio: any): Observable<any[]> {
    return this.getUsodefondos().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };

  getInscriptos(): Observable<Inscriptos[]> {
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos`);
  };
  public fromMunicipioInsc(municipio: any): Observable<any[]> {
    return this.getInscriptos().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };
  getInscriptosCeb(): Observable<Inscriptos[]> {
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos_ceb`);

  };
  public fromMunicipioIceb(municipio: any): Observable<any[]> {
    return this.getInscriptosCeb().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };
  getInscriptosGp(): Observable<Inscriptos_gp[]> {
    return this.http.get<Inscriptos_gp[]>(`${this.apiUrl}/inscriptos_gp`);

  };
  public fromMunicipioGpi(municipio: any): Observable<Inscriptos_gp[]> {
    return this.getInscriptosGp().pipe(map(data => data.filter(m => m.municipio === municipio)))
  }



}
