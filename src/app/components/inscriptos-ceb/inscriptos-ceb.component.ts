import { Component, OnInit } from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Inscriptos } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'

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
    mes_1: 0,
    mes_2: 0,
    mes_3: 0,
    mes_4: 0,
    mes_5: 0,
    mes_6: 0,
    mes_7: 0,
    mes_8: 0,
    mes_9: 0,
    mes_10: 0,
    mes_11: 0,
    mes_12: 0,
    padron_1:"",
    padron_2:"",
    padron_3:"",
    padron_4:"",
    padron_5:"",
    padron_6:"",
    padron_7:"",
    padron_8:"",
    padron_9:"",
    padron_10:"",
    padron_11:"",
    padron_12:"",

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



