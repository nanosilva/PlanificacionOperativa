import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, map, Subscription } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Prestacion, Prestacion2022 } from '../interfaces/planificacio.interfaces';

@Component({
  selector: 'app-chart-prest-ge',
  templateUrl: './chart-prest-ge.component.html',
  styleUrls: ['./chart-prest-ge.component.css']
})
export class ChartPrestGeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  private sub!: Subscription;

  selectedmunicipio$ = this.chartService.selectedmunicipio$;

  title = 'ng2-charts-demo';

  prestacionList!: Prestacion2022[];
  prestacion: Prestacion2022 = {
    id: 0,
    cod_mun: "",
    municipio: "",
    ninos_05: 0,
    ninos_69: 0,
    adolescentes: 0,
    adultos: 0,
    emb: 0,

  };

  porcentaje!: number;
  prestAcum!: number;
  ninos_05_pct!: number;
  ninos_69_pct!: number;
  adolesc_pct!: number;
  adultos_pct!: number;
  emb_pct!: number;
  cargando: boolean = false;


  //Pie
  //public chartData: ChartDataset[] = [
  // {
  //   data: [], label: 'Prestaciones Grupo Etario',
  //   fill: true,
  //   tension: 0.2,
  //borderColor: 'black',
  //},


  // ];
  // public label: string[] = ['2019', '2020', '2021', '2022'];
  /// public options: ChartOptions = {
  //  scales: {
  //    y: {
  //      beginAtZero: true,

  //   },

  // }
  // }
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,


  };
  public pieChartLabels = ['0-5 años', ['6-9 años'], ['Adolescentes'], ['Adultos'], ['Embarazadas']];
  public pieChartDatasets: any = [{
    data: [],
  }];
  public pieChartLegend = true;



  constructor(public chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getPrestacionesgp().subscribe(data => {
      this.prestacionList = data;
      console.log(data)
    })


  };

  isLoading(): boolean{
    return this.cargando=true;
  }

  loadData(event: any) {
    if (this.prestacion.municipio) {
      forkJoin([
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.ninos_05))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.ninos_69))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.adolescentes))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.adultos))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.emb))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.total_ac)))


      ]).subscribe(([data0, data1, data2, data3, data4, data5]) => {

        let prest0 = +data0;
        let prest1 = +data1;
        let prest2 = +data2;
        let prest3 = +data3;
        let prest4 = +data4;
        let total_2024 = +data5;

        this.prestAcum = total_2024;
        this.ninos_05_pct = Math.round((prest0/total_2024)*100);
        this.ninos_69_pct = Math.round((prest1/total_2024)*100);
        this.adolesc_pct = Math.round((prest2/total_2024)*100);
        this.adultos_pct = Math.round((prest3/total_2024)*100);
        this.emb_pct = Math.round((prest4/total_2024)*100);

        this.pieChartDatasets[0].data = [data0, data1, data2, data3, data4];

        this.chart.update();
        this.cargando= false;
        console.log(prest0, prest1, prest2, prest3, prest4)

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
      docResult.save(`Prestaciones_2023_Ge.pdf`);
    });
  };

}






