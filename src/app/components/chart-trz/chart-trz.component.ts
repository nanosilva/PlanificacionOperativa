import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { Subscription, forkJoin, map } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Trz_evol } from '../interfaces/planificacio.interfaces';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-chart-trz',
  templateUrl: './chart-trz.component.html',
  styleUrls: ['./chart-trz.component.css']
})
export class ChartTrzComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  private sub!: Subscription;
  title = 'ng2-charts-demo';
  porcentaje!: number;
  var_inscriptos!: number;
  var_ceb!: number;
  trazadoraList: Trz_evol[] = []
  trazadora: Trz_evol = {
    id: 0,
    cod_mun: "",
    municipio: "",
    trazadora: 0,
    casos_1c2022: 0,
    tca_1c2022: "",
    casos_2c2022: 0,
    tca_2c2022: "",
    casos_3c2022: 0,
    tca_3c2022: "",
    casos_1c2023:0,
    tca_1c2023: "",
    casos_2c2023: 0,
    tca_2c2023: "",
    casos_3c2023: 0,
    tca_3c2023: ""
  };
  municipios!: any[];
  muni_nombre!: any[]
  showTrz = false;

  public chartData: ChartDataset[] = [
    {
      data: [], label: '3er Cuat 22',
      fill: true,
      tension: 0.2,
      //borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)' 
    },
    {
      data: [], label: '1er Cuat 23',
      fill: true,
      tension: 0.2,
      pointBorderColor: 'black'
      //borderColor: 'black',
      //backgroundColor: 'rgba(0,255,0,0.3)' 
    },

  ];
  public label: string[] = ['trz 1', 'trz 2', 'trz 3','trz 4','trz 8','trz 9'];
  public options: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,

      },

    }
  }

  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getTrazadorasEvol().subscribe(data => {
      this.trazadoraList = data;
      this.getMuni();
     
      //  let municipio = [...new Set(this.municipios)];
      //  this.muni_nombre = municipio

      //  console.log(this.muni_nombre);
      
    })
  };
  loadData(event: any) {
    if (this.trazadora.municipio) {
      forkJoin([
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.trazadora))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.tca_1c2022))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.tca_2c2022))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.tca_3c2022))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.casos_1c2022))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.casos_2c2022))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.casos_3c2022))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.tca_1c2023))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.tca_2c2023))),
        this.chartService.municipioTrzEvol(this.trazadora.municipio).pipe(map(data => data.map(val => val.tca_3c2023))),


      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8, data9]) => {
        // let trz = +data0[0];
        let tca_11 = +data1[0];
        let tca_21 = +data2[0];
        let tca_31 = +data3[0];
        let tca_12 = +data1[1];
        let tca_22 = +data2[1];
        let tca_32 = +data3[1];
        let tca_13 = +data1[2];
        let tca_23 = +data2[2];
        let tca_33 = +data3[2];
        let tca_14 = +data1[3];
        let tca_24 = +data2[3];
        let tca_34 = +data3[3];
        let tca_15 = +data1[4];
        let tca_25 = +data2[4];
        let tca_35 = +data3[4];
        let tca_16 = +data1[5];
        let tca_26 = +data2[5];
        let tca_36 = +data3[5];
        let tca_17 = +data1[6];
        let tca_27 = +data2[6];
        let tca_37 = +data3[6];
        let tca_18 = +data1[7];
        let tca_28 = +data2[7];
        let tca_38 = +data3[7];
        let tca_19 = +data1[8];
        let tca_29 = +data2[8];
        let tca_39 = +data3[8];
        let tca_110 = +data1[9];
        let tca_210 = +data2[9];
        let tca_310 = +data3[9];
        let tca_123_1 = +data7[0];
        let tca_123_2 = +data7[1];
        let tca_123_3 = +data7[2];
        let tca_123_4 = +data7[3];
        let tca_123_5 = +data7[4];
        let tca_123_6 = +data7[5];
        let tca_123_7 = +data7[6];
        let tca_123_8 = +data7[7];
        let tca_123_9 = +data7[8];
        let tca_123_10 = +data7[9];
      

        //serie 2do cuat 2022  x trazadora
       // this.chartData[0].data = [tca_21, tca_22, tca_23, tca_24, tca_28, tca_29];

        //serie 3er cuat 2022 x trazadora
        this.chartData[0].data = [tca_31, tca_32, tca_33, tca_34,tca_38, tca_39];

        //serie 1er cuat 2023 x trazadora
        this.chartData[1].data = [tca_123_1, tca_123_2, tca_123_3, tca_123_4,tca_123_8, tca_123_9];


        this.chart.update();
        console.log( this.chartData[0].data)

      });

    }

  };
  getMuni(): void {
    this.chartService.getTrazadorasEvol().subscribe(
      res => {
        let muni = res.map(res => res.municipio);
        this.municipios = muni
        console.log(this.municipios);
        
       let municipio = [...new Set(this.municipios)];
       this.muni_nombre = municipio

       console.log(this.muni_nombre);
       
      }
    )
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
      docResult.save(`Trz_evol_tca_1C2023.pdf`);
    });
  };





}




