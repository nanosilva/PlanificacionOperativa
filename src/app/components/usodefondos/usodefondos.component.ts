import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { map } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Rendicion } from '../interfaces/planificacio.interfaces';


@Component({
  selector: 'app-usodefondos',
  templateUrl: './usodefondos.component.html',
  styleUrls: ['./usodefondos.component.css']
})
export class UsodefondosComponent implements OnInit {

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
  chart: any = [];
  constructor(private chartservice: ChartsService) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    this.chartservice.getRendicion().subscribe(data => {
      this.municipios = data;
      console.log(this.municipios);

      let anio_2019: any = this.chartservice.fromMunicipio(this.municipio.municipio)
        .pipe(map(data => data.map(val => val.anio_2019))).subscribe((res => {
          anio_2019 = res;
          this.municipio.anio_2019 = anio_2019

          console.log(this.municipio.anio_2019)
        }));

      let anio_2020: any = this.chartservice.fromMunicipio(this.municipio.municipio)
        .pipe(map(data => data.map(val => val.anio_2020))).subscribe((res => {
          anio_2020 = res;
          this.municipio.anio_2020 = anio_2020

          console.log(this.municipio.anio_2020);

          //show grafico
          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: ['2019', '2020'],
              datasets: [
                {
                label: 'rendicion',
                data: [this.municipio.anio_2019, this.municipio.anio_2020],
                backgroundColor: 'rgba(93, 175, 89, 0.1)',
                borderColor: '#3e95cd',
                borderWidth: 1
              }]
            },
           

          })

        }));

    }

    )


  };
}


