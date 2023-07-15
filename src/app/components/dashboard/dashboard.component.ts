import { Component, OnInit } from '@angular/core';
import { currencyBitcoin } from 'ngx-bootstrap-icons';
import { ChartsService } from 'src/app/servicios/charts.service';

import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Inscriptos } from '../interfaces/planificacio.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  inscriptos_list!: Inscriptos[];
  inscriptos!: number;
  insc_ceb!: number;
  prestaciones!: number;
  transferencias!: number;
  rendido!: number;
  retribucion!: number;
  total!: number;
  ceb!: number;
  data_mes: String[];
  prestaciones_monto: number;


  constructor(private datosPlanificacion: PlanificacionService,
    private chartService: ChartsService) { }

  ngOnInit(): void {
    this.datosPlanificacion.getInscriptos().subscribe(data => {

      this.inscriptos_list = data
    })
    this.totalInscriptos();
    this.totalIncriptosCeb();
    this.totalPrestaciones();
    this.totalTransferido();
    this.totalRendido();
    this.mesData();
    this.totalPrestacionesMonto();

  };

  totalInscriptos(): void {
    this.datosPlanificacion.getInscriptos().subscribe(data => {
      let total_inscripto = data.map(data => data.mes_12).reduce((acum, curr) => acum + curr, 0);
      this.inscriptos = total_inscripto / 2
      console.log(this.inscriptos);
    }
    )

  };
  totalIncriptosCeb(): void {
    this.datosPlanificacion.getInscriptosCeb().subscribe(data => {
      let total_ceb = data.map(data => data.mes_12).reduce((acum, curr) => acum + curr, 0);
      this.insc_ceb = total_ceb / 2
      console.log(this.insc_ceb)
    })
  };

  totalPrestaciones(): void {
    this.datosPlanificacion.obtenerPrestaciones().subscribe(data => {
      let total_prestaciones = data.map(data => data.anio_2023).reduce((acum, curr) => acum + curr, 0);
      this.prestaciones = total_prestaciones / 2;
      console.log(this.prestaciones)
    });

  }
  totalPrestacionesMonto(): void {
    this.datosPlanificacion.getPrestacionesMonto().subscribe(data => {
      let total_prestaciones = data.map(data => data.anio_2023).reduce((acum, curr) => acum + curr, 0);
      this.prestaciones_monto = total_prestaciones;
      console.log(this.prestaciones_monto)
    });

  }

  totalTransferido(): void {
    this.chartService.getTransferencias().subscribe(data => {
      let total_tranf = data.map(data => data.total_acum).reduce((acum, curr) => acum + curr, 0);
      this.transferencias = total_tranf;
      console.log(this.transferencias)
    })
  };

  totalRendido(): void {
    this.chartService.getRendicion().subscribe(data => {
      let total_rendido = data.map(data => data.acumulado).reduce((acum, curr) => acum + curr, 0);
      this.rendido = total_rendido;
      console.log(this.rendido)
    })
  };
  mesData(): void {
    this.datosPlanificacion.getInscriptos().subscribe(data => {
      let data_mes = data.map(data => data.padron_12)
      this.data_mes = data_mes
      console.log(this.data_mes)
    })

  }

}
