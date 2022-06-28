import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { ChartConfiguration, ChartData, ChartDataset, ChartDatasetProperties, ChartOptions, ChartType } from 'chart.js';
import { Rendicion } from '../interfaces/planificacio.interfaces';
import { forkJoin, map, Subscription, tap } from 'rxjs';
import { data } from 'autoprefixer';
import { BaseChartDirective } from 'ng2-charts';


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
  rendicionList!: Rendicion[];
  municipios: Rendicion[] = []
  municipio: Rendicion = {
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
    acumulado: 0,
    fech_ult_expte: ""
  }

  anio_19!: any[];

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
  public label: string[] = ['2019'];
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
      this.municipios = data;

      //this.chartService.fromMunicipio(this.municipio.municipio).subscribe(res => {
      //res.filter(m => m.municipio === this.municipio.municipio)
      // console.log(res)
      // }
      // )

      this.getMuni();
      this.getRendido();

      this.chartService.getTransferencias().subscribe(data =>{
        this.municipios = data;
        console.log(this.municipios)
      })

    });
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
    if (this.municipio.municipio) {
      forkJoin([
        this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2019))),
        this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2020))),
        this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2021))),
        this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.anio_2022))),
        this.chartService.fromMunicipio(this.municipio.municipio).pipe(map(data => data.map(val => val.acumulado))),
        this.chartService.fromMunicipioT(this.municipio.municipio).pipe(map(data => data.map(res=> res.anio_2019))),
        this.chartService.fromMunicipioT(this.municipio.municipio).pipe(map(data => data.map(res=> res.anio_2020))),
        
      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6] ) => {
        var rendido= data0.concat(data1).concat(data2).concat(data3).concat(data4);
        this.anio_19= rendido

        this.chartData[0].data  ={data0, data1, data2, data3, data4} as any
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
  }
};
