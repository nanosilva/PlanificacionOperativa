import { Component, OnInit } from '@angular/core';
import { PlanificacionService } from 'src/app/servicios/planificacion.service';
import { Rendicion } from '../interfaces/planificacio.interfaces';

@Component({
  selector: 'app-rendicion',
  templateUrl: './rendicion.component.html',
  styleUrls: ['./rendicion.component.css']
})
export class RendicionComponent implements OnInit {

  filterPost=""
  rendicionList!: Rendicion[];
  rendicion: Rendicion = {
    id: 0,
    cod_mun: "",
    municipio:"",
    anio_2008:0, 
    anio_2009:0 , 
    anio_2010:0,
    anio_2011:0,  
    anio_2012:  0,
    anio_2013: 0,
    anio_2014: 0,
    anio_2015: 0,
    anio_2016: 0,
    anio_2017: 0,
    anio_2018:0,
    anio_2019:0,
    anio_2020: 0,
    anio_2021: 0,
    anio_2022: 0,
    acumulado:0,
    fech_ult_expte:""
  }
  constructor(public datosPlanificacion: PlanificacionService) { }

  ngOnInit(): void {

    this.datosPlanificacion.obtenerRendicion().subscribe(data=>{
      console.log(data);
      this.rendicionList=data;
    })
  };

 
}
