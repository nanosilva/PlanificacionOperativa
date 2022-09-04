import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, map, Subscription } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Inscriptos_gp } from '../interfaces/planificacio.interfaces';

@Component({
  selector: 'app-chart-ceb-ge',
  templateUrl: './chart-ceb-ge.component.html',
  styleUrls: ['./chart-ceb-ge.component.css']
})
export class ChartCebGeComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  private sub!: Subscription;

  inscriptos_gpList: Inscriptos_gp[] = [];
  inscriptos_gp: Inscriptos_gp = {
    id: 0,
    cod_mun: "",
    municipio: "",
    ninos_05: 0,
    ninos_69: 0,
    adolescentes: 0,
    mujeres: 0,
    hombres: 0,
    total: 0,
    ninos_05_ceb: 0,
    ninos_69_ceb: 0,
    adolescentes_ceb: 0,
    mujeres_ceb: 0,
    hombres_ceb: 0,
    total_ceb: 0,

  };

  ninos_05_pct?: number;
  ninos_69_pct!: number;
  adolesc_pct!: number;
  mujeres_pct!: number;
  hombres_pct!: number;
  total_pct!: number;
  total_insc_ceb!: number;


  //grafico lineas

  public chartData: ChartDataset[] = [
    {
      data: [], label: 'CEB',
      fill: true,
      tension: 0.2,
      //borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)' 
    },


  ];
  public label: string[] = ['0-5 años', '6-9 años', 'Adolescentes', 'Mujeres', 'Hombres'];
  public options: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,

      },

    }
  }

  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getInscriptosGp().subscribe(data => {
      this.inscriptos_gpList = data;
      console.log(data);
    })
  };

  loadData(event: any) {
    if (this.inscriptos_gp.municipio) {
      forkJoin([
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.ninos_05))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.ninos_69))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.adolescentes))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.mujeres))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.hombres))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.ninos_05_ceb))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.ninos_69_ceb))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.adolescentes_ceb))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.mujeres_ceb))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.hombres_ceb))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.total))),
        this.chartService.fromMunicipioGpi(this.inscriptos_gp.municipio).pipe(map(data => data.map(val => val.total_ceb))),

      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8, data9,data10, data11]) => {

        let ninos_05 = +data0;
        let ninos_69 = +data1;
        let adolesc = +data2;
        let mujeres = +data3;
        let hombres = +data4;
        let ninos05_ceb = +data5;
        let ninos_69_ceb= +data6;
        let adolesc_ceb = +data7;
        let mujeres_ceb = +data8;
        let hombres_ceb = +data9;
        let total_insc = +data10;
        let total_ceb = +data11;

        this.total_pct = total_ceb/total_insc
        this.total_insc_ceb = total_ceb
        this.ninos_05_pct = Math.round((ninos05_ceb / ninos_05) * 100);
        this.ninos_69_pct = Math.round((ninos_69_ceb/ ninos_69) * 100);
        this.adolesc_pct = Math.round((adolesc_ceb / adolesc) * 100);
        this.mujeres_pct = Math.round((mujeres_ceb / mujeres) * 100);
        this.hombres_pct = Math.round((hombres_ceb / hombres) * 100);

        this.chartData[0].data = [this.ninos_05_pct, this.ninos_69_pct,this.adolesc_pct, this.mujeres_pct, this.hombres_pct];

        this.chart.update();
        console.log(this.ninos_05_pct, this.ninos_69_pct,this.adolesc_pct, this.mujeres_pct, this.hombres_pct)

      });

    };
  }


}
