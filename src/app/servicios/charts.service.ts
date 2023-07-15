import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, pipe } from 'rxjs';
import { Inscriptos, Inscriptos_gp, municipio, Prestacion, Prestacion_tipo, Rendicion, Transferencias, Trazadoras, Trz_evol, usodefondos } from '../components/interfaces/planificacio.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ChartsService {


  muni_ini!: String;


  private municipio$ = new BehaviorSubject<any>(this.muni_ini);

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  get selectedmunicipio$(): Observable<any> {
    return this.municipio$.asObservable();
  }

  setMunicipio(municipio: Rendicion): void {
    this.municipio$.next(municipio);
  }

  public getRendicion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rendicion/ver`);
  }

  public fromMunicipio(municipio: any): Observable<any[]> {
    return this.getRendicion().pipe(map(data => data.filter(m => m.municipio === municipio)));

    /*  data.map(res => res.municipio))) */

  };
  public getTransferencias(): Observable<Transferencias[]> {
    return this.http.get<Transferencias[]>(`${this.apiUrl}/transferencias/ver`);
  };

  public fromMunicipioT(municipio: any): Observable<any[]> {
    return this.getTransferencias().pipe(map(data => data.filter(m => m.municipio === municipio)));
    /*  data.map(res => res.municipio))) */

  };
  public getPrestaciones(): Observable<Prestacion[]> {
    return this.http.get<Prestacion[]>(`${this.apiUrl}/prestaciones/ver`)
  };
  public getPrestacionesMonto(): Observable<Prestacion[]> {
    return this.http.get<Prestacion[]>(`${this.apiUrl}/prestaciones_monto/ver`)

  };

  public fromMunicipioM(municipio: any): Observable<any[]> {
    return this.getPrestacionesMonto().pipe(map(data => data.filter(m => m.municipio === municipio)));

  };

  public fromMunicipioP(municipio: any): Observable<any[]> {
    return this.getPrestaciones().pipe(map(data => data.filter(m => m.municipio === municipio)));
  };

  public getPrestacionesgp(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prestaciones_gp/ver`);
  };

  public fromMunicipioGp(municipio: any): Observable<any[]> {
    return this.getPrestacionesgp().pipe(map(data => data.filter(m => m.municipio === municipio)));
  };

  public getUsodefondos(): Observable<usodefondos[]> {
    return this.http.get<usodefondos[]>(`${this.apiUrl}/uso_de_fondos/ver`)
  };
  public fromMunicipioUsof(municipio: any): Observable<any[]> {
    return this.getUsodefondos().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };

  getInscriptos(): Observable<Inscriptos[]> {
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos/ver`);
  };
  public fromMunicipioInsc(municipio: any): Observable<any[]> {
    return this.getInscriptos().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };
  getInscriptosCeb(): Observable<Inscriptos[]> {
    return this.http.get<Inscriptos[]>(`${this.apiUrl}/inscriptos_ceb/ver`);

  };
  public fromMunicipioIceb(municipio: any): Observable<any[]> {
    return this.getInscriptosCeb().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };
  getInscriptosGp(): Observable<Inscriptos_gp[]> {
    return this.http.get<Inscriptos_gp[]>(`${this.apiUrl}/inscriptos_gp/ver`);

  };
  public fromMunicipioGpi(municipio: any): Observable<Inscriptos_gp[]> {
    return this.getInscriptosGp().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };

  getPrestacionesTipo(): Observable<Prestacion_tipo[]> {
    return this.http.get<Prestacion_tipo[]>(`${this.apiUrl}/prestaciones_tipo/ver`)
  };
  public fromMunicipioTp(municipio: any): Observable<Prestacion_tipo[]> {
    return this.getPrestacionesTipo().pipe(map(data => data.filter(m => m.municipio === municipio)))
  };
  getTrazadoras(): Observable<Trazadoras[]> {
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_1c2022/ver`)
  };
  public fromMunicipioTrz(municipio: any): Observable<Trazadoras[]> {
    return this.getTrazadoras().pipe(map(data => data.filter(m => m.municipio === municipio)))

  };
  getTrazadoras2C(): Observable<Trazadoras[]> {
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_2c2022/ver`)
  };
  public fromMunicipioTrz2C(municipio: any): Observable<Trazadoras[]> {
    return this.getTrazadoras2C().pipe(map(data => data.filter(m => m.municipio === municipio)))

  };

  getTrazadoras3C(): Observable<Trazadoras[]> {
    return this.http.get<Trazadoras[]>(`${this.apiUrl}/trazadoras_3c2022/ver`)
  };
  public fromMunicipioTrz3C(municipio: any): Observable<Trazadoras[]> {
    return this.getTrazadoras3C().pipe(map(data => data.filter(m => m.municipio === municipio)))

  };
  getTrazadorasEvol(): Observable<Trz_evol[]> {
    return this.http.get<Trz_evol[]>(`${this.apiUrl}/trazadoras_evolucion/ver`)
  };
  public municipioTrzEvol(municipio: any): Observable<Trz_evol[]> {
    return this.getTrazadorasEvol().pipe(map(data => data.filter(m => m.municipio === municipio)))

  };

};