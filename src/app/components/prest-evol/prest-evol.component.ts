import { Component, OnInit } from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Prestacion } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-prest-evol',
  templateUrl: './prest-evol.component.html',
  styleUrls: ['./prest-evol.component.css']
})
export class PrestEvolComponent implements OnInit {
  filterPost="";
  total!:number;
  name = 'Prestaciones.xlsx';
  searchText!: string;

  prestacionesList!: Prestacion[];
  prestaciones: Prestacion={
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
    total_ac: 0,

  }

  constructor(private datosPlanificacion: PlanificacionService) { }

  ngOnInit(): void {

    this.datosPlanificacion.obtenerPrestaciones().subscribe(data=>{
      console.log(data);
      this.prestacionesList=data;
    }
      )
  };

  exportToExcel(): void {
    let element = document.getElementById('prest-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
  
    XLSX.writeFile(book, this.name, );
  };

}
