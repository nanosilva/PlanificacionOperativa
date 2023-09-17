import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin, map, Subscription } from 'rxjs';
import { ChartsService } from 'src/app/servicios/charts.service';
import { Inscriptos_gp } from '../interfaces/planificacio.interfaces';


@Component({
  selector: 'app-chart-inscrip-ge',
  templateUrl: './chart-inscrip-ge.component.html',
  styleUrls: ['./chart-inscrip-ge.component.css']
})
export class ChartInscripGeComponent implements OnInit {

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
  total_insc!: number;

   // Pie
   public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,


  };
  public pieChartLabels = ['0-5 años', ['6-9 años'], ['Adolescentes'], ['Mujeres'], ['Hombres']];
  public pieChartDatasets: any = [{
    data: [],
  }];
  public pieChartLegend = true;



  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getInscriptosGp().subscribe(data=>{
      this.inscriptos_gpList= data;
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

      ]).subscribe(([data0, data1, data2, data3, data4]) => {

        let ninos_05 = +data0;
        let ninos_69 = +data1;
        let adolesc = +data2;
        let mujeres = +data3;
        let hombres = +data4;
        let total_insc = ninos_05 + ninos_69 + adolesc + mujeres + hombres;

        this.total_insc= total_insc
        this.ninos_05_pct = Math.round((ninos_05/total_insc)*100);
        this.ninos_69_pct = Math.round((ninos_69/total_insc)*100);
        this.adolesc_pct = Math.round((adolesc/total_insc)*100);
        this.mujeres_pct = Math.round((mujeres/total_insc)*100);
        this.hombres_pct = Math.round((hombres/total_insc)*100);

        this.pieChartDatasets[0].data = [data0, data1, data2, data3, data4];

        this.chart.update();
        console.log(ninos_05, ninos_69,adolesc, mujeres, hombres)

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
      docResult.save(`Inscriptos_por_GE.pdf`);
    });
  };

  

}
