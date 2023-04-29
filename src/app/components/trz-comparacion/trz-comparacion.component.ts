import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Trz_evol } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-trz-comparacion',
  templateUrl: './trz-comparacion.component.html',
  styleUrls: ['./trz-comparacion.component.css']
})
export class TrzComparacionComponent implements OnInit {
  name = 'ExcelSheet.xlsx';

  total!: any
  filterPost2 = ""
  searchText!: string;
  trazadoraList!: Trz_evol[];
  trazadoras = {
    id: 0,
    cod_mun: "",
    municipio: "",
    trazadora: 0,
    casos_1c2022: 0,
    tca_1c2022: "",
    casos_2c2022: 0,
    tca_2c2022: "",
    casos_3c2022: 0,
    tca_3c2022: ""
  };

  municipios!: any[];
  municipio = [...new Set(this.municipios)];
  showTrz = false;


  constructor(private datosPlanificacion: PlanificacionService,
    private chartService: ChartsService) { }



  ngOnInit(): void {
    this.chartService.getTrazadorasEvol().subscribe(data => {
      this.trazadoraList = data;
      console.log(data)
      this.getMuni();
    }
      
    )
  };

  exportToExcel(): void {
    let element = document.getElementById('rend-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  };

  getMuni(): void {
    this.chartService.getTrazadoras().subscribe(
      res => {
        let muni = res.map(res => res.municipio);
        this.municipios = muni
        console.log(this.municipios);
      }
    )
  };
}

