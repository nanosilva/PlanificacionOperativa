import { Component, OnInit } from '@angular/core';
import { Prestacion_monto } from '../interfaces/planificacio.interfaces';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-prest-evol-monto',
  templateUrl: './prest-evol-monto.component.html',
  styleUrls: ['./prest-evol-monto.component.css']
})
export class PrestEvolMontoComponent implements OnInit {

  searchText!: String;
  name = 'Prestaciones_montos.xlsx';
  total!: number;
  prestacionesList!: Prestacion_monto[];
  prestaciones_monto: Prestacion_monto = {
    id: 0,
    cod_mun: "",
    municipio: "",
    anio_2013: 0,
    anio_2014: 0,
    anio_2015: 0,
    anio_2016: 0,
    anio_2017: 0,
    anio_2018: 0,
    anio_2019: 0,
    anio_2020: 0,
    anio_2021: 0,
    anio_2022: 0,
    anio_2023: 0,
    total_ac: 0,

  }

  constructor(private datosPlanificacion: PlanificacionService) { }

  ngOnInit(): void {
    this.datosPlanificacion.getPrestacionesMonto().subscribe(data => {
      this.prestacionesList = data;
      console.log(data)

    }
    )
  };
  
  exportToExcel(): void {
    let element = document.getElementById('prest-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name,);
  };

}
