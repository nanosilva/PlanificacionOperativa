import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Trazadoras } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-trazadoras3c2022',
  templateUrl: './trazadoras3c2022.component.html',
  styleUrls: ['./trazadoras3c2022.component.css']
})
export class Trazadoras3c2022Component implements OnInit {

  name = 'Trz_3C2022.xlsx';

  total!: any
  filterPost2 = ""

  
  searchText!: string;
  trazadoraList!: Trazadoras[];
  trazadoras = {
    id: 0,
    periodo: "",
    cod_mun: "",
    municipio: "",
    casos_positivos: 0,
    trazadora: 0,
    meta_pct: 0,
    meta_casos: 0,
    tasa_cobertura: "",
    tcm: "",
    cumple_tcm: "",
  };
  
  municipios!: any[];
  municipio= [...new Set(this.municipios)]
  // municipio_n=[...new Set(this.municipios.map((p)=>p.municipio))]
  showTrz= false;
  cuatrimestre!:String;

  constructor(private datosPlanificacion: PlanificacionService,
    private chartService: ChartsService) { }

  ngOnInit(): void {
    this.datosPlanificacion.getTrazadoras3c23().subscribe(data=>{
      this.trazadoraList= data;
      console.log(data)
     this.getMuni();
     console.log(this.municipio)

    })
  };

  exportToExcel(): void {
    let element = document.getElementById('rend-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  };

  loadData(event: any) {
    if (this.trazadoras.municipio) {
      forkJoin([
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.trazadora))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.casos_positivos))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.meta_casos))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.meta_pct))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.tasa_cobertura))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.tcm))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.cumple_tcm))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.municipio))),
        this.chartService.fromMunicipioTrz3C(this.trazadoras.municipio).pipe(map(data => data.map(val => val.periodo)))

      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8]) => {

       let trz1 = [data0[0], data1[0], data2[0], data3[0], data4[0], data5[0], data6[0], data7[0]];
        let trz8 = data8[0]
        let trz2 = data2 as any[];
        let trz3 = data3 as any[];
        // let trz4 = data4 as unknown as string;
        // let trz5 = data5 as unknown as string;
        // let trz6 = data6 as unknown as string;
        // let trz7= data7 as unknown as string

        // let trz = [trz0];
        // let trz_n = [...new Set(trz)];
        // console.log(trz_n);   
        console.log(trz1, trz2, trz3);
       

        // let muni = Array.from(new Set(data7))
         this.cuatrimestre= trz8
      });
    };
  };
  getMuni(): void {
    this.chartService.getTrazadoras1c23().subscribe(
      res => {
        let muni = res.map(res => res.municipio);
        this.municipios = muni
        console.log(this.municipios);
      }
    )
  };

}




