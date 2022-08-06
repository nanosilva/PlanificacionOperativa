import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, map, Subscription } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Prestacion, Rendicion } from '../interfaces/planificacio.interfaces';

@Component({
  selector: 'app-chart-prestacion',
  templateUrl: './chart-prestacion.component.html',
  styleUrls: ['./chart-prestacion.component.css']
})
export class ChartPrestacionComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  private sub!: Subscription;
  

  selectedmunicipio$= this.chartService.selectedmunicipio$;
  title = 'ng2-charts-demo';
  muni_n!: any[];
  prestacionList!: Prestacion[];
  prestacion: Prestacion = {
    id: 0,
    cod_mun: "",
    municipio: "",
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
    total_ac: 0,

  }
  
  porcentaje!: number;
  prestAcum!: number;
  transfAcum!: number;
  ultimoExte!: string;
  selectedMunicipio$= this.chartService.selectedmunicipio$;
  
  public chartData: ChartDataset[] = [
    {
      data: [], label: 'Prestaciones',
      fill: true,
      tension: 0.2,
      //borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)' 
    },


  ];
  public label: string[] = ['2019', '2020', '2021', '2022'];
  public options: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,

      },

    }
  }


  constructor(public chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getPrestaciones().subscribe(data => {
      this.prestacionList = data;
      console.log( data)
     
      
    })
   

  };
  
  loadData(event: any) {
    if (this.prestacion.municipio) {
      forkJoin([
        this.chartService.fromMunicipioP(this.prestacion.municipio).pipe(map(data => data.map(val => val.anio_2019))),
        this.chartService.fromMunicipioP(this.prestacion.municipio).pipe(map(data => data.map(val => val.anio_2020))),
        this.chartService.fromMunicipioP(this.prestacion.municipio).pipe(map(data => data.map(val => val.anio_2021))),
        this.chartService.fromMunicipioP(this.prestacion.municipio).pipe(map(data => data.map(val => val.anio_2022))),
        this.chartService.fromMunicipioP(this.prestacion.municipio).pipe(map(data => data.map(val => val.total_ac))),
        

      ]).subscribe(([data0, data1, data2, data3, data4]) => {

        let prest0 = +data0;
        let prest1 = +data1;
        let prest2 = +data2;
        let prest3 = +data3;
        let prest4 = +data4;

        this.prestAcum= prest4
        this.chartData[0].data = [prest0, prest1, prest2, prest3];

        this.chart.update();

      });

    };
    
    

  }
  
 
  
}
