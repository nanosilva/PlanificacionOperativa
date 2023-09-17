import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { forkJoin, map } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { usodefondos } from '../interfaces/planificacio.interfaces';
import { BaseChartDirective } from 'ng2-charts';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-usodefondos',
  templateUrl: './usodefondos.component.html',
  styleUrls: ['./usodefondos.component.css']
})
export class UsodefondosComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  usodefondosList: usodefondos[]=[];
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
  otros_pct!: number;
  locacion_pct!: number;
  insumos_pct!: number;
  inversion_pct!: number;
  mantenim_pct!: number;
  incentivos_pct!: number;
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,


  };
  public pieChartLabels = ['Otros' ,['Incentivos'], ['Locación'], ['Insumos'], ['Inversiones'], ['Mantenimiento']];
  public pieChartDatasets: any = [{
    data: [],
  }];
  public pieChartLegend = true;



  constructor(public chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getUsodefondos().subscribe(data => {
      this.usodefondosList = data;
      console.log(data)

    })
  };

  loadData(event: any) {
    if (this.usodefondos.municipio) {
      forkJoin([
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_6))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_7))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_8))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_11))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_12))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_13))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_21))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_22))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_23))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_31))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_32))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_41))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_42))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_43))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_51))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_52))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.item_53))),
        this.chartService.fromMunicipioUsof(this.usodefondos.municipio).pipe(map(data => data.map(val => val.total))),

      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12,
        data13, data14, data15, data16, data17]) => {
        let item6 = +data0;
        let item7 = +data1;
        let item8 = +data2;
        let item11 = +data3;
        let item12 = +data4;
        let item13 = +data5;
        let item21 = +data6;
        let item22 = +data7;
        let item23 = +data8;
        let item31 = +data9;
        let item32 = +data10;
        let item41 = +data11;
        let item42 = +data12;
        let item43 = +data13;
        let item51 = +data14;
        let item52 = +data15;
        let item53 = +data16;
        let totaluf = +data17;
        let otros = item6 + item7 + item8;
        let incentivos = item11 + item12 + item13;
        let locacion = item21 + item22 + item23;
        let insumos = item31 + item32;
        let inversiones = item41 + item42 + item43;
        let mantenimiento = item51 + item52 + item53;
        this.total = totaluf
        this.incentivos_pct = Math.round(( incentivos / totaluf)*100);
        this.insumos_pct = Math.round((insumos / totaluf)*100);
        this.inversion_pct = Math.round((inversiones / totaluf)*100);
        this.locacion_pct = Math.round((locacion / totaluf)*100);
        this.mantenim_pct = Math.round((mantenimiento / totaluf)*100);
        this.otros_pct = Math.round((otros / totaluf)*100);

        this.pieChartDatasets[0].data = [otros, incentivos, locacion, insumos, inversiones, mantenimiento];
        this.chart.update();
      })
    }
  };
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
      docResult.save(`Uso_de_fondos.pdf`);
    });
  };

};


