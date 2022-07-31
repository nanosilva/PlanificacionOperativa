import { Component, OnInit, ViewChild ,Input} from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
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
  @Input()
  municipio!: string
  private sub!: Subscription;


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

  }
  porcentaje!: number;
  prestAcum!: number;
  transfAcum!: number;
  ultimoExte!: string;

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
public pieChartLabels =  [  '0-5 años', [ '0-9 años'], ['Adolescentes'],['Adultos'],['Embarazadas'] ];
public pieChartDatasets :any= [ {
  data: [],
} ];
public pieChartLegend = true;



  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getPrestacionesgp().subscribe(data => {
      this.prestacionList = data;
      console.log(data)
    })


  };

  loadData(event: any) {
    if (this.prestacion.municipio) {
      forkJoin([
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.ninos_05))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.ninos_69))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.adolescentes))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.adultos))),
        this.chartService.fromMunicipioGp(this.prestacion.municipio).pipe(map(data => data.map(val => val.emb))),


      ]).subscribe(([data0, data1, data2, data3, data4]) => {

        let prest0 = +data0;
        let prest1 = +data1;
        let prest2 = +data2;
        let prest3 = +data3;
        let prest4 = +data4;
        let total_2022= prest0+prest1+prest2+prest3+prest4

        this.prestAcum =total_2022
        this.pieChartDatasets[0].data= [data0, data1, data2,data3, data4];

        this.chart.update();
        console.log(prest0, prest1, prest2, prest3, prest4)

      });

    };
  }
 
}






