import { Component, OnInit } from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Prestacion, Prestacion_tipo } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-prest-tipo',
  templateUrl: './prest-tipo.component.html',
  styleUrls: ['./prest-tipo.component.css']
})
export class PrestTipoComponent implements OnInit {
  filterPost="";
  total!:number;
  name = 'prestaciones_tipo.xlsx';
  searchText!: string;

  prestacionesList!: Prestacion_tipo[];
  prestaciones: Prestacion_tipo={
    id: 0,
    cod_mun: "",
    municipio: "",
    consultas: 0,
    inmunizaciones: 0,
    ig_lb_pr: 0,
    internacion: 0,
    partos: 0,
    talleres: 0,
    anato: 0,
    varias: 0,
    total: 0

  }

  constructor(private datosPlanificacion: PlanificacionService) { }

  ngOnInit(): void {

    this.datosPlanificacion.getPrestacionesTipo().subscribe(data=>{
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
