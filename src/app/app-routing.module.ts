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
import { ChartCebGeComponent } from './components/chart-ceb-ge/chart-ceb-ge.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrestEvolMontoComponent } from './components/prest-evol-monto/prest-evol-monto.component';
import { ChartPrestMontoComponent } from './components/chart-prest-monto/chart-prest-monto.component';
import { UsodefondosListComponent } from './components/usodefondos-list/usodefondos-list.component';
import { PrestTipoComponent } from './components/prest-tipo/prest-tipo.component';
import { ChartPrestTipoComponent } from './components/chart-prest-tipo/chart-prest-tipo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'rendicion', component: RendicionComponent },
  { path: 'rendicion/grafico', component: ChartRendicionComponent },
  { path: 'transferencias', component: TransferenciasComponent },
  { path: 'transferencias/grafico', component: TransferenciasComponent },
  { path: 'usodefondos/grafico', component: UsodefondosComponent },
  { path: 'usodefondos/total', component: UsodefondosListComponent},
  { path: 'prestaciones/total', component: PrestEvolComponent },
  { path: 'prestaciones/total_monto', component: PrestEvolMontoComponent },
  { path: 'prestaciones/tipoprestacion', component: PrestTipoComponent},
  { path: 'prestaciones/grafico/total_monto', component: ChartPrestMontoComponent},
  { path: 'prestaciones/grafico/total', component: ChartPrestacionComponent },
  { path: 'prestaciones/grafico/ge', component: ChartPrestGeComponent },
  { path: 'prestaciones/grafico/tipoprestacion', component: ChartPrestTipoComponent },
  { path: 'inscriptos/total', component: InscriptosComponent },
  { path: 'inscriptos/inscriptos_ceb', component: InscriptosCebComponent },
  { path: 'inscriptos/inscriptos_ge', component: ChartInscripGeComponent },
  { path: 'inscriptos/ceb_ge', component: ChartCebGeComponent },
  { path: 'inscriptos/grafico', component: ChartInscriptosComponent },
  { path: 'sidebar', component: SidebarComponent},
  

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }