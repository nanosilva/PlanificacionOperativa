import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
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
  var_inscriptos!:number;
  var_ceb!: number;
  inscriptosList: Inscriptos[]=[]
  inscriptos: Inscriptos={
    id: 0,
    cod_mun: "",
    municipio: "",
    ene_21: 0,
    feb_21: 0,
    mar_21: 0,
    abr_21: 0,
    may_21: 0,
    jun_21: 0,
    jul_21: 0,
    ago_21: 0,
    sep_21: 0,
    oct_21: 0,
    nov_21: 0,
    dic_21: 0,
    ene_22: 0,
    feb_22: 0,
    mar_22:0,
    abr_22: 0,
    may_22: 0,
    jun_22: 0,
    jul_22: 0,
    ago_22: 0,
    sep_22: 0,
    oct_22: 0,
    nov_22: 0,
    dic_22: 0,
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
  public label: string[] = ['mar-21', 'abr-21', 'may-21', 'jun-21', 'jul-21', 'ago-21', 'sep-21', 'oct-21', 'nov-21', 'dic-21', 'ene-22', 'feb-22'];
  public options: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        
      },
      
    }
  }


  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getInscriptos().subscribe(data=>{
      this.inscriptosList= data;
    })
  };

  loadData(event: any) {
    if (this.inscriptos.municipio) {
      forkJoin([
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mar_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.abr_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.may_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.jun_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.jul_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.ago_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.sep_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.oct_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.nov_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.dic_21))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.ene_22))),
        this.chartService.fromMunicipioInsc(this.inscriptos.municipio).pipe(map(data => data.map(val => val.feb_22))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.mar_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.abr_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.may_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.jun_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.jul_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.ago_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.sep_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.oct_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.nov_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.dic_21))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.ene_22))),
        this.chartService.fromMunicipioIceb(this.inscriptos.municipio).pipe(map(data => data.map(val => val.feb_22))),

      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11,data12,data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23])=>{
        let inscripto_0= +data0;
        let inscripto_1= +data1;
        let inscripto_2=+data2;
        let inscripto_3=+data3;
        let inscripto_4=+data4;
        let inscripto_5=+data5;
        let inscripto_6=+data6;
        let inscripto_7=+data7;
        let inscripto_8=+data8;
        let inscripto_9=+data9;
        let inscripto_10=+data10;
        let inscripto_11=+data11;
        let inscriptoceb_0= +data12;
        let inscriptoceb_1= +data13;
        let inscriptoceb_2=+data14;
        let inscriptoceb_3=+data15;
        let inscriptoceb_4=+data16;
        let inscriptoceb_5=+data17;
        let inscriptoceb_6=+data18;
        let inscriptoceb_7=+data19;
        let inscriptoceb_8=+data20;
        let inscriptoceb_9=+data21;
        let inscriptoceb_10=+data22;
        let inscriptoceb_11=+data23;
        this.porcentaje= inscriptoceb_11/inscripto_11;
        this.var_inscriptos= (inscripto_11/inscripto_0-1);
        this.var_ceb= (inscriptoceb_11/inscriptoceb_0-1);

      

        this.chartData[0].data  =[inscripto_0,inscripto_1,inscripto_2,inscripto_3, inscripto_4,inscripto_5,inscripto_6,inscripto_7,inscripto_8,inscripto_9,inscripto_10,inscripto_11];
        this.chartData[1].data =[inscriptoceb_0	,inscriptoceb_1,	inscriptoceb_2,	inscriptoceb_3,	inscriptoceb_4,	inscriptoceb_5,	inscriptoceb_6,	inscriptoceb_7,	inscriptoceb_8,	inscriptoceb_9,	inscriptoceb_10,	inscriptoceb_11
        ]
        this.chart.update();

      });

    }
    
  }
};


