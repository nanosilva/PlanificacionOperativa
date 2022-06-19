import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { ChartConfiguration, ChartDataset, ChartOptions, Color, } from 'chart.js';
import { Rendicion } from '../interfaces/planificacio.interfaces';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { data } from 'autoprefixer';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-chart-rendicion',
  templateUrl: './chart-rendicion.component.html',
  styleUrls: ['./chart-rendicion.component.css']
})
export class ChartRendicionComponent implements OnInit {
  title = 'ng2-charts-demo';
  total!: any[];
  rendicionList!: Rendicion[];
  municipios!: Rendicion[];
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



  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
    ],
    datasets: [
      {
        data: [120, 125, 150, 0, 0, 0, 285],

        label: 'Rendido',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor(private chartService: ChartsService) {

  }


  ngOnInit(): void {
    this.chartService.getRendicion().subscribe(data => {

      this.municipios = data;


     /*   this.chartService.fromMunicipio('').subscribe(data => {
        console.log(data)
      }
      )*/

      this.getMuni()
    });
  };
  getMuni(): void {
    this.chartService.getRendicion().subscribe(
      res => {
        const muni = res.map(res => res.municipio);
        
        const anio_2008 = res.map(res => res.anio_2008);
       
        console.log(anio_2008);
        this.total=muni
        console.log(this.total);

     }
    )
   



};

}