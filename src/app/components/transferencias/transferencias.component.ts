import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Transferencias } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'


@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {
  name = 'ExcelSheet.xlsx';
  total!:number
  filterPost=""
  searchText!: string;
  transferenciasList!: Transferencias[];
  transferencia: Transferencias = {
    id: 0,
    cod_mun: "",
    municipio:"",
    anio_2007:0,
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
    total_acum:0,
    
  }
  



  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getTransferencias().subscribe(data=>{
      this.transferenciasList= data;
      console.log(data);
      
    })

    };

   

  exportToExcel(): void {
    let element = document.getElementById('rend-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
  
    XLSX.writeFile(book, this.name);
  }

}
