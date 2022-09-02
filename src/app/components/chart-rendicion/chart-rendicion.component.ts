import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsService } from 'src/app/servicios/charts.service';
import { ChartConfiguration, ChartData, ChartDataset, ChartDatasetProperties, ChartOptions, ChartType } from 'chart.js';
import { municipio, Rendicion, Transferencias } from '../interfaces/planificacio.interfaces';
import { forkJoin, map, Subscription, concatMap, concat } from 'rxjs';
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
  rendicionList: Rendicion[]=[];
  transferencia!: Transferencias[];
  rendicion: Rendicion = {
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
  rendido!: any[];
  porcentaje!:number;
  rendidoAcum!: number;
  transfAcum!: number;
  ultimoExte!: string;
  selectedMunicipio!: string;
  order!: string;

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
  public label: string[] = ['2019', '2020', '2021', '2022'];
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
      this.rendicionList = data;
      console.log( this.selectedMunicipio);
    this.chartService.selectedmunicipio$.subscribe(data1=>{
      this.selectedMunicipio= data1
    })  
      //this.chartService.fromMunicipio(this.municipio.municipio).subscribe(res => {
      //res.filter(m => m.municipio === this.municipio.municipio)
      // console.log(res)
      // }
      // )
      this.getMuni();
      this.getRendido();
      this.chartService.getTransferencias().subscribe(data =>{
        this.transferencia = data;
        console.log(this.transferencia)
      })

    })
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
    if (this.rendicion.municipio) {
      forkJoin([
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2019))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2020))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2021))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.anio_2022))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.acumulado))),
        this.chartService.fromMunicipio(this.rendicion.municipio).pipe(map(data => data.map(val => val.fech_ult_expte))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2007))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2008))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2009))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2010))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2011))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2012))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2013))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2014))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2015))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2016))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2017))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2018))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2019))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2020))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2021))),
        this.chartService.fromMunicipioT(this.rendicion.municipio).pipe(map(data => data.map(res=> res.anio_2022))),

      ]).subscribe(([data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13,
      data14, data15, data16, data17, data18, data19, data20, data21] ) => {

        let rend0=+data0;
        let rend1=+data1;
        let rend2=+data2;
        let rend3=+data3;
        let rend4=+data4;
        let transf5=+data6;
        let transf6=+data7;
        let transf7=+data8;
        let transf8=+data9;
        let transf9=+data10;
        let transf10=+data11;
        let transf11=+data12;
        let transf12=+data13;
        let transf13=+data14;
        let transf14=+data15;
        let transf15=+data16;
        let transf16=+data17;
        let transf17=+data18;
        let transf18=+data19;
        let transf19=+data20;
        let transf20=+data21;

        let sumarend=rend4;
        let sumatr= transf5+transf6+transf7+transf8+transf9+transf10+transf11+transf12+transf13+transf14+transf15+transf16+transf17+transf18+transf19+transf20
        this.porcentaje= ((sumarend/sumatr))
        this.rendidoAcum= sumarend;
        this.transfAcum= sumatr;
        this.ultimoExte=data5 as any;

        this.chartData[0].data  =[rend0 , rend1, rend2, rend3];
        this.chartData[1].data =[transf17, transf18, transf19, transf20]
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
