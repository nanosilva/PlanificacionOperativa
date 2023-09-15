import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { ChartConfiguration, ChartData, ChartDataset, ChartDatasetProperties, ChartOptions, ChartType } from 'chart.js';
import { municipio, Rendicion, Transferencias } from '../interfaces/planificacio.interfaces';
import { forkJoin, map, Subscription, concatMap, concat } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-chart-rendicion',
  templateUrl: './chart-rendicion.component.html',
  styleUrls: ['./chart-rendicion.component.css']
})
export class ChartRendicionComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  private sub!: Subscription;


  title = 'ng2-charts-demo';
  muni_n!: any[];
  rendicionList: Rendicion[] = [];
  transferencia!: Transferencias[];
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
    acumulado: 0,
    fech_ult_expte: "",
    ult_bm_rendido: ""
  }

  anio_19!: any[];
  rendido!: any[];
  porcentaje!: any;
  rendidoAcum!: number;
  transfAcum!: number;
  ultimoExte!: string;
  selectedMunicipio!: string;
  order!: string;
  ult_rendido: string;
  pct_rendido: any;

  public chartData: ChartDataset[] = [
    {
      data: [], label: 'Rendición',
      fill: true,
      tension: 0.2,
      //borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)' 
    },
    {
      data: [], label: 'Transferencias',
      fill: true,
      tension: 0.2,
      //borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)' 
    },

  ];
  public label: string[] = ['2019', '2020', '2021', '2022', '2023'];
  public options: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,

      },

    }
  }

  constructor(private chartService: ChartsService) {
  }

  ngOnInit(): void {
    this.chartService.getRendicion().subscribe(data => {
      this.rendicionList = data;
      //  console.log( this.selectedMunicipio);
      //this.chartService.selectedmunicipio$.subscribe(data1=>{
      // this.selectedMunicipio= data1
      //   })  
      //this.chartService.fromMunicipio(this.municipio.municipio).subscribe(res => {
      //res.filter(m => m.municipio === this.municipio.municipio)
      // console.log(res)
      // }
      // )
      this.getMuni();
      //this.getRendido();
     
      console.log(this.pct_rendido)
      
      this.chartService.getTransferencias().subscribe(data => {
        this.transferencia = data;
        console.log(this.transferencia)
      })
    })
    console.log(this.porcentaje)
    this.pctRendido(this.rendidoAcum, this.transfAcum);


  };

  getRendido(): void {
    this.chartService.getRendicion().subscribe(
      res => {
        const rendido = res.map(res => res.anio_2019);
        this.anio_19 = rendido as any
        console.log(this.anio_19);
      }
    )

  };


  getMuni(): void {
    this.chartService.getRendicion().subscribe(
      res => {
        const muni = res.map(res => res.municipio);
        this.muni_n = muni
        console.log(this.muni_n);
      }
    );
  };

  loadData(event: any) {
    if (this.rendicion.municipio) {
      forkJoin([
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2019))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2020))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2021))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2022))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2023))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.acumulado))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.fech_ult_expte))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.ult_bm_rendido))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2007))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2008))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2009))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2010))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2011))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2012))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2013))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2014))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2015))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2016))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2017))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2018))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2019))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2020))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2021))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2022))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.anio_2023))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.total_acum))),

      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10,
        data11, data12, data13, data14, data15, data16, data17, data18, data19, data20,
        data21, data22, data23, data24, data25
      ]) => {

        let rend0 = +data0;
        let rend1 = +data1;
        let rend2 = +data2;
        let rend3 = +data3;
        let rend4 = +data4;
        let rend5 = +data5;
        let rend6 = +data6;
        let rend7 = +data7;
        let transf8 = +data8;
        let transf9 = +data9;
        let transf10 = +data10;
        let transf11 = +data11;
        let transf12 = +data12;
        let transf13 = +data13;
        let transf14 = +data14;
        let transf15 = +data15;
        let transf16 = +data16;
        let transf17 = +data17;
        let transf18 = +data18;
        let transf19 = +data19;
        let transf20 = +data20;
        let transf21 = +data21;
        let transf22 = +data22;
        let transf23 = +data23;
        let transf24 = +data24;
        let tr_acum = +data25

        let sumarend = rend5;
        // let sumatr = transf8 + transf9 + transf10 + transf11 + transf12 + transf13 + transf14 + transf15 + transf16 + transf17 +
        //            transf18 + transf19 + transf20 + transf21 + transf22 + transf23 +transf24
        this.porcentaje = ((sumarend / tr_acum))
        this.rendidoAcum = sumarend;
        this.transfAcum = tr_acum;
        this.ultimoExte = data6 as any;
        this.ult_rendido = data7 as any
        

        this.chartData[0].data = [rend0, rend1, rend2, rend3, rend4];
        this.chartData[1].data = [transf20, transf21, transf22, transf23, transf24]
        this.chart.update();

      });

      //this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2019))),
      //this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2020))),
      //this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2021))),
      //this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2022))),
      //]).subscribe(([data0, data1]) => {
      //this.lineChartData.datasets= data0 ;
      //this.lineChartData.datasets[1] = data1 as any;
      //this.municipio.anio_2019 = data1 as any
      //});

      console.log(this.chartData[0], this.chartData[1]);
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
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  };

 /*   porcentajeRendido() {
    forkJoin([
      this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.acumulado))),
      this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res => res.total_acum))),
    ]).subscribe(([data0, data1]) => {
      let rend_ac = +data0;
      let tr_acum = +data1;
      this.porcentaje = ((rend_ac / tr_acum));
      let pct = ((+data0 / +data1))
      console.log(this.porcentaje)
      if (pct > 1) {
        return this.porcentaje==1;
      }
      else
        return pct;
        console.log(this.pct_rendido)
    })}*/
    pctRendido(rendidoAcum: number, tr_acum: number):number{
     
      if (this.porcentaje > 1){
        return 1;
      }
      else {
      return this.porcentaje}
     }
}

