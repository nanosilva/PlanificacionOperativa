import { Component, OnInit } from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';

import * as XLSX from 'xlsx'
import { Inscriptos } from '../interfaces/planificacio.interfaces';


@Component({
  selector: 'app-inscriptos',
  templateUrl: './inscriptos.component.html',
  styleUrls: ['./inscriptos.component.css']
})
export class InscriptosComponent implements OnInit {
  filterPost="";
  name= 'ExcelSheet.xlsx'; 
  total!: number;
  variacion!: number;
  padrones01!: string[];
  padrones02!: string[];
  padrones03!: string[];
  padrones04!: string[];
  padrones05!: string[];
  padrones06!: string[];
  padrones07!: string[];
  padrones08!: string[];
  padrones09!: string[];
  padrones10!: string[];
  padrones11!: string[];
  padrones12!: string[];
  //padron01= [...new Set(this.padrones01)]
  
  inscriptosList!: Inscriptos[];
  inscriptos: Inscriptos={
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
    padron_12:""
  }

  constructor(private datosPlanificacion: PlanificacionService) { }

  ngOnInit(): void {
    this.datosPlanificacion.getInscriptos().subscribe(data=>{
      this.inscriptosList=data;
      console.log(data)
      this.getPadron();
      
    })
  }


  exportToExcel(): void {
    let element = document.getElementById('rend-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
  
    XLSX.writeFile(book, this.name);
  };
 
  getPadron(): void {
    this.datosPlanificacion.getInscriptos().subscribe(
      res => {
        let pad1 = res.map(res => res.padron_1);
        let pad2 = res.map(res => res.padron_2);
        let pad3 = res.map(res => res.padron_3);
        let pad4 = res.map(res => res.padron_4);
        let pad5 = res.map(res => res.padron_5);
        let pad6 = res.map(res => res.padron_6);
        let pad7 = res.map(res => res.padron_7);
        let pad8 = res.map(res => res.padron_8);
        let pad9 = res.map(res => res.padron_9);
        let pad10 = res.map(res => res.padron_10);
        let pad11 = res.map(res => res.padron_11);
        let pad12 = res.map(res => res.padron_12);
        this.padrones01= pad1;
        this.padrones02= pad2;
        this.padrones03= pad3;
        this.padrones04= pad4;
        this.padrones05= pad5;
        this.padrones06= pad6;
        this.padrones07= pad7;
        this.padrones08= pad8;
        this.padrones09= pad9;
        this.padrones10= pad10;
        this.padrones11= pad11;
        this.padrones12= pad12;
        console.log(this.padrones01[0]);
      }
    )
  };
  

}
