import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from 'autoprefixer';
import { ChartDataset, ChartOptions } from 'chart.js';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, map, Subscription } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Inscriptos } from '../interfaces/planificacio.interfaces';

@Component({
  selector: 'app-chart-inscriptos',
  templateUrl: './chart-inscriptos.component.html',
  styleUrls: ['./chart-inscriptos.component.css']
})
export class ChartInscriptosComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  private sub!: Subscription;

  title = 'ng2-charts-demo';
  porcentaje!: number;
  var_inscriptos!: number;
  var_ceb!: number;
  cargando: boolean= false;

  inscriptosList: Inscriptos[] = []
  inscriptos: Inscriptos = {
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
    padron_1: "",
    padron_2: "",
    padron_3: "",
    padron_4: "",
    padron_5: "",
    padron_6: "",
    padron_7: "",
    padron_8: "",
    padron_9: "",
    padron_10: "",
    padron_11: "",
    padron_12: "",

  }

  public chartData: ChartDataset[] = [
    {
      data: [], label: 'Inscriptos',
      fill: true,
      tension: 0.2,
      //borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)' 
    },
    {
      data: [], label: 'Inscriptos CEB',
      fill: true,
      tension: 0.2,
      pointBorderColor: 'black'
      //borderColor: 'black',
      //backgroundColor: 'rgba(0,255,0,0.3)' 
    },

  ];
  public label: any[] = [];
  public options: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,

      },

    }
  }


  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getInscriptos().subscribe(data => {
      this.inscriptosList = data;
    })
    console.log(this.porcentaje)
    console.log(this.inscriptosList)
  };
  isLoading(): boolean{
    return this.cargando=true;
  }

  loadData(event: any) {
    if (this.inscriptos.municipio) {
      forkJoin([
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_1))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_2))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_3))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_4))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_5))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_6))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_7))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_8))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_9))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_10))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_11))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_12))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_1))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_2))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_3))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_4))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_5))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_6))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_7))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_8))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_9))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_10))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_11))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mes_12))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_1))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_2))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_3))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_4))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_5))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_6))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_7))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_8))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_9))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_10))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_11))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.padron_12))),

      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13,
                   data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24,
                  data25, data26, data27, data28, data29, data30, data31, data32, data33, data34, data35]) => {
        let inscripto_0 = +data0;
        let inscripto_1 = +data1;
        let inscripto_2 = +data2;
        let inscripto_3 = +data3;
        let inscripto_4 = +data4;
        let inscripto_5 = +data5;
        let inscripto_6 = +data6;
        let inscripto_7 = +data7;
        let inscripto_8 = +data8;
        let inscripto_9 = +data9;
        let inscripto_10 = +data10;
        let inscripto_11 = +data11;
        let inscriptoceb_0 = +data12;
        let inscriptoceb_1 = +data13;
        let inscriptoceb_2 = +data14;
        let inscriptoceb_3 = +data15;
        let inscriptoceb_4 = +data16;
        let inscriptoceb_5 = +data17;
        let inscriptoceb_6 = +data18;
        let inscriptoceb_7 = +data19;
        let inscriptoceb_8 = +data20;
        let inscriptoceb_9 = +data21;
        let inscriptoceb_10 = +data22;
        let inscriptoceb_11 = +data23;
        let padron_1 = data24;
        let padron_2 = data25;
        let padron_3 = data26;
        let padron_4 = data27;
        let padron_5 = data28;
        let padron_6 = data29;
        let padron_7 = data30;
        let padron_8 = data31;
        let padron_9 = data32;
        let padron_10 = data33;
        let padron_11 = data34;
        let padron_12 = data35;
        this.porcentaje = (inscriptoceb_11/ inscripto_11);
        this.var_inscriptos = (inscripto_11 / inscripto_0 - 1);
        this.var_ceb = (inscriptoceb_11 / inscriptoceb_0 - 1);
        


        this.chartData[0].data = [inscripto_0, inscripto_1, inscripto_2, inscripto_3, inscripto_4, inscripto_5, inscripto_6, inscripto_7, inscripto_8, inscripto_9, inscripto_10, inscripto_11];
        this.chartData[1].data = [inscriptoceb_0, inscriptoceb_1, inscriptoceb_2, inscriptoceb_3, inscriptoceb_4, inscriptoceb_5, inscriptoceb_6, inscriptoceb_7, inscriptoceb_8, inscriptoceb_9, inscriptoceb_10, inscriptoceb_11
        ]
        this.label = [padron_1, padron_2, padron_3, padron_4, padron_5, padron_6,padron_7,
        padron_8, padron_9, padron_10, padron_11, padron_12];
        this.chart.update();
        this.cargando=false;
       

      });

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
      docResult.save(`Inscriptos_evolucion_mes.pdf`);
    });
  };

};


