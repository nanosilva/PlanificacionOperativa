import { Component, OnInit} from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Rendicion } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-rendicion',
  templateUrl: './rendicion.component.html',
  styleUrls: ['./rendicion.component.css']
})
export class RendicionComponent implements OnInit {
  
  name = 'ExcelSheet.xlsx';
  total!:number
  filterPost=""
  rendicionList!: Rendicion[];
  rendicion: Rendicion = {
    id: 0,
    cod_mun: "",
    municipio:"",
    anio_2008:0, 
    anio_2009:0 , 
    anio_2010:0,
    anio_2011:0,  
    anio_2012:  0,
    anio_2013: 0,
    anio_2014: 0,
    anio_2015: 0,
    anio_2016: 0,
    anio_2017: 0,
    anio_2018:0,
    anio_2019:0,
    anio_2020: 0,
    anio_2021: 0,
    anio_2022: 0,
    acumulado:0,
    fech_ult_expte:""
  }
  constructor(public datosPlanificacion: PlanificacionService) { }

  ngOnInit(): void {
    

    this.datosPlanificacion.obtenerRendicion().subscribe(data=>{
      console.log(data);
      this.rendicionList=data;
    })
  
};
  
exportToExcel(): void {
  let element = document.getElementById('rend-tabla');
  const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  const book: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

  XLSX.writeFile(book, this.name);
};

sumaColumna(){
  this.total = this.rendicionList.map(item => item.anio_2022).reduce((prev, curr) => prev + curr, 0);
  console.log(this.total);
  

};
}


