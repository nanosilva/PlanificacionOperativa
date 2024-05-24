import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Rendicion } from '../interfaces/planificacio.interfaces';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-rendicion',
  templateUrl: './rendicion.component.html',
  styleUrls: ['./rendicion.component.css']
})
export class RendicionComponent implements OnInit {

  name = 'Rendición_de_Fondos.xlsx';
  total_2022!: number;
  total_2023!: number;
  total_2024!: number;
  total_acum!: number;
  filterPost = "";
  filterPost2 = "";
  texto = "";
  order: string = "";
  p: number = 1;
  reverse: boolean = true;
  rendicionList!: Rendicion[];
  rendicion: Rendicion = {
    id: 0,
    cod_mun: "",
    municipio: "",
    anio_2008: 0,
    anio_2009: 0,
    anio_2010: 0,
    anio_2011: 0,
    anio_2012: 0,
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
    anio_2024: 0,
    acumulado: 0,
    fech_ult_expte: "",
    ult_bm_rendido: ""
  }
  constructor(private datosPlanificacion: PlanificacionService) {
    // this.downloadPDF();
  }

  ngOnInit(): void {


    this.datosPlanificacion.obtenerRendicion().subscribe(data => {
      console.log(data);
      this.rendicionList = data;
      const totalRendido2022 = this.rendicionList.map(item => item.anio_2022).reduce((prev, curr) => prev + curr, 0);
      this.total_2022 = totalRendido2022;
      const totalRendido2023 = this.rendicionList.map(item => item.anio_2023).reduce((prev, curr) => prev + curr, 0);
      this.total_2023 = totalRendido2022;
      const totalRendido2024 = this.rendicionList.map(item => item.anio_2024).reduce((prev, curr) => prev + curr, 0);
      this.total_2024 = totalRendido2022;
      console.log(this.total_2022);

    })

  };

  exportToExcel(): void {
    let element = document.getElementById('rend-tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  };

  // sumaColumna(): void{
  //   const totalRendido = this.rendicionList.map(item => item.anio_2022).reduce((prev, curr) => prev + curr, 0);
  //   this.total= totalRendido
  //   console.log(this.total);
  // };

  borrarTexto() {
    this.filterPost = '';
  };

  setOrder(ordencolumna: string) {
    if (this.order === ordencolumna) {
      this.reverse = !this.reverse
    }
    else {
      this.reverse = true;
    }
    this.order = ordencolumna


  }


  // crearPdf(){
  // var data = document.getElementById('aPdf');
  // html2canvas(data).then(canvas =>{
  // var imgWidth = 208;
  // var imgHeight = canvas.height * imgWidth / canvas.width;
  // let pdf = new jspdf.jsPDF();
  // var position = 0;
  // pdf.save('MyPdf.pdf');
  // });
  // };

  // public downloadPDF(): void {
  // const doc = new jspdf.jsPDF();

  //doc.text('Hello world!', 10, 10);
  //doc.save('hello-world.pdf');
  // }
  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jspdf.jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');
      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

}


