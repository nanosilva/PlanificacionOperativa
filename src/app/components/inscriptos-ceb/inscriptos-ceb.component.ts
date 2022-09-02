import { Component, OnInit } from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Inscriptos } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'
import { map } from 'rxjs';

@Component({
  selector: 'app-inscriptos-ceb',
  templateUrl: './inscriptos-ceb.component.html',
  styleUrls: ['./inscriptos-ceb.component.css']
})
export class InscriptosCebComponent implements OnInit {
  filterPost = "";
  name = 'ExcelSheet.xlsx';
  total! : number;
  municipio!: string;
  inscriptoscebList!: Inscriptos[];
  inscriptosceb: Inscriptos = {
    id: 0,
    cod_mun: "",
    municipio: "",
    ene_21: 0,
    feb_21: 0,
    mar_21: 0,
    abr_21: 0,
    may_21: 0,
    jun_21: 0,
    jul_21: 0,
    ago_21: 0,
    sep_21: 0,
    oct_21: 0,
    nov_21: 0,
    dic_21: 0,
    ene_22: 0,
    feb_22: 0,
    mar_22: 0,
    abr_22: 0,
    may_22: 0,
    jun_22: 0,
    jul_22: 0,
    ago_22: 0,
    sep_22: 0,
    oct_22: 0,
    nov_22: 0,
    dic_22: 0,

  }

  constructor(private datosPlanificacion: PlanificacionService) { }

  ngOnInit(): void {
    this.datosPlanificacion.getInscriptosCeb().subscribe(data => {
      this.inscriptoscebList = data;
      console.log(data);

    })

  };

  exportToExcel(): void {
    let element = document.getElementById('rend-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  };
 
   }



