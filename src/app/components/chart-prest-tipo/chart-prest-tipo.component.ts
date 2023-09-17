import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, map, Subscription } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Prestacion2022, Prestacion_tipo } from '../interfaces/planificacio.interfaces';

@Component({
  selector: 'app-chart-prest-tipo',
  templateUrl: './chart-prest-tipo.component.html',
  styleUrls: ['./chart-prest-tipo.component.css']
})
export class ChartPrestTipoComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  private sub!: Subscription;



  title = 'ng2-charts-demo';

  prestacionesList!: Prestacion_tipo[];
  prestaciones: Prestacion_tipo = {
    id: 0,
    cod_mun: "",
    municipio: "",
    consultas: 0,
    inmunizaciones: 0,
    ig_lb_pr: 0,
    internacion: 0,
    partos: 0,
    talleres: 0,
    anato: 0,
    varias: 0,
    total: 0
    

  };

  porcentaje!: number;
  prestAcum!: number;
  ct_pct!: number;
  imv_pct!: number;
  img_pct!: number;
  ite_pct!: number;
  parto_pct!: number;
  taller_pct!: number;
  apa_pct!: number;
  varias_pct!: number

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,


  };
  public pieChartLabels = ['Consultas', ['Inmunizaciones'], ['IGR+LBL+PRP'], ['Internacion'], ['Partos'], ['Talleres'], ['Anato'], ['Otras']];
  public pieChartDatasets: any = [{
    data: [],
  }];
  public pieChartLegend = true;

  constructor(public chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getPrestacionesTipo().subscribe(data => {
      console.log(data);
      this.prestacionesList = data;
    }
    )
  };

  loadData(event: any) {
    if (this.prestaciones.municipio) {
      forkJoin([
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.consultas))),
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.inmunizaciones))),
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.ig_lb_pr))),
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.internacion))),
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.partos))),
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.talleres))),
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.anato))),
        this.chartService.fromMunicipioTp(this.prestaciones.municipio).pipe(map(data => data.map(val => val.varias))),


      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7]) => {

        let prest0 = +data0;
        let prest1 = +data1;
        let prest2 = +data2;
        let prest3 = +data3;
        let prest4 = +data4;
        let prest5 = +data5;
        let prest6 = +data6;
        let prest7 = +data7;



        let total_2022 = prest0 + prest1 + prest2 + prest3 + prest4 + prest5 + prest6 + prest7

        this.prestAcum = total_2022;
        this.ct_pct = Math.round((prest0 / total_2022) * 100);
        this.imv_pct = Math.round((prest1 / total_2022) * 100);
        this.img_pct = Math.round((prest2 / total_2022) * 100);
        this.ite_pct = Math.round((prest3 / total_2022) * 100);
        this.parto_pct = Math.round((prest4 / total_2022) * 100);
        this.taller_pct = Math.round((prest5 / total_2022) * 100);
        this.apa_pct = Math.round((prest6/ total_2022)*100);
        this.varias_pct = Math.round((prest7/ total_2022)*100);

        this.pieChartDatasets[0].data = [data0, data1, data2, data3, data4, data5, data6, data7];

        this.chart.update();
        console.log(prest0, prest1, prest2, prest3, prest4, prest5, prest6, prest7)

      });

    };
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
      docResult.save(`Prestaciones_2023_tipo.pdf`);
    });
  };

}



