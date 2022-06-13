import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart-rendicion',
  templateUrl: './chart-rendicion.component.html',
  styleUrls: ['./chart-rendicion.component.css']
})
export class ChartRendicionComponent implements OnInit {

  chart!:{}

  constructor(private datarend: ChartsService ) { }

  ngOnInit(): void {
    this.datarend.dataRendicion().subscribe(data=>{
      let monto_2008 = data.map(data=>data.anio_2008);
     
      const monto_2009 = data.map(data =>data.anio_2009)
      const monto_2010 = data.map((data: { anio_2010: any; })=>data.anio_2010)
      const monto_2011 = data.map((data: { anio_2011: any; })=>data.anio_2011)
      const monto_2012 = data.map((data: { anio_2012: any; })=>data.anio_2012)
      const monto_2013 = data.map((data: { anio_2013: any; })=>data.anio_2013)
      const monto_2014 = data.map((data: { anio_2014: any; })=>data.anio_2014)
      const monto_2015 = data.map((data: { anio_2015: any; })=>data.anio_2015)
      const monto_2016 = data.map((data: { anio_2016: any; })=>data.anio_2016)
      const monto_2017 = data.map((data: { anio_2017: any; })=>data.anio_2017)
      const monto_2018 = data.map((data: { anio_2018: any; })=>data.anio_2018)
      const monto_2019 = data.map((data: { anio_2019: any; })=>data.anio_2019)
      const monto_2020 = data.map((data: { anio_2020: any; })=>data.anio_2020)
      const monto_2021 = data.map((data: { anio_2021: any; })=>data.anio_2021)
      const monto_2022 = data.map((data: { anio_2022: any; })=>data.anio_2022)
      const municipio = data.map((data: {muicipio: any;})=>data.muicipio)
    });
    
     this.chart= new Chart('canvas', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
