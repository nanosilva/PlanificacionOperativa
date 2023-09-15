import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { usodefondos } from '../interfaces/planificacio.interfaces';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-usodefondos-list',
  templateUrl: './usodefondos-list.component.html',
  styleUrls: ['./usodefondos-list.component.css']
})
export class UsodefondosListComponent implements OnInit {
  searchText!: string;
  name = 'Usodefondos.xlsx';
  usodefondosList: usodefondos[] = [];
  usodefondos: usodefondos = {
    id: 0,
    cod_mun: "",
    municipio: "",
    item_6: 0,
    item_7: 0,
    item_8: 0,
    item_11: 0,
    item_12: 0,
    item_13: 0,
    item_21: 0,
    item_22: 0,
    item_23: 0,
    item_31: 0,
    item_32: 0,
    item_41: 0,
    item_42: 0,
    item_43: 0,
    item_51: 0,
    item_52: 0,
    item_53: 0,
    total: 0,

  };
  total!: number;
  otros!: number;
  locacion!: number;
  insumos!: number;
  inversion!: number;
  mantenim!: number;
  incentivos!: number;

  constructor(public chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getUsodefondos().subscribe(data => {
      this.usodefondosList = data;
      console.log(data)

    })
  };

  exportToExcel(): void {
    let element = document.getElementById('prest-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name,);
  };
  borrarTexto() {
    this.searchText = '';
  };


}
