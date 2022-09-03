import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendicionComponent } from './components/rendicion/rendicion.component';
import { ChartRendicionComponent } from './components/chart-rendicion/chart-rendicion.component';
import { HomeComponent } from './components/home/home.component';
import { PrestEvolComponent } from './components/prest-evol/prest-evol.component';
import { ChartPrestacionComponent } from './components/chart-prestacion/chart-prestacion.component';
import { ChartPrestGeComponent } from './components/chart-prest-ge/chart-prest-ge.component';
import { UsodefondosComponent } from './components/usodefondos/usodefondos.component';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { InscriptosComponent } from './components/inscriptos/inscriptos.component';
import { InscriptosCebComponent } from './components/inscriptos-ceb/inscriptos-ceb.component';
import { ChartInscriptosComponent } from './components/chart-inscriptos/chart-inscriptos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChartInscripGeComponent } from './components/chart-inscrip-ge/chart-inscrip-ge.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rendicion', component: RendicionComponent },
  { path: 'rendicion/grafico', component: ChartRendicionComponent },
  { path: 'transferencias', component: TransferenciasComponent },
  { path: 'transferencias/grafico', component: TransferenciasComponent },
  { path: 'usodefondos/grafico', component: UsodefondosComponent },
  { path: 'prestaciones', component: PrestEvolComponent },
  { path: 'prestaciones/grafico', component: ChartPrestacionComponent },
  { path: 'prestaciones/grafico/ge', component: ChartPrestGeComponent },
  { path: 'inscriptos/total', component: InscriptosComponent },
  { path: 'inscriptos/inscriptos_ceb', component: InscriptosCebComponent },
  { path: 'inscriptos/inscriptos_ge', component: ChartInscripGeComponent },
  { path: 'inscriptos/grafico', component: ChartInscriptosComponent },
  

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }