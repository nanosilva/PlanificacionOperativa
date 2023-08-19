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
import { TrazadorasComponent } from './components/trazadoras/trazadoras.component';
import { TrzComparacionComponent } from './components/trz-comparacion/trz-comparacion.component';
import { ChartTrzComponent } from './components/chart-trz/chart-trz.component';
import { Trazadoras2c2022Component } from './components/trazadoras2c2022/trazadoras2c2022.component';
import { Trazadoras3c2022Component } from './components/trazadoras3c2022/trazadoras3c2022.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './servicios/guard.guard';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { Trazadoras1c2023Component } from './components/trazadoras1c2023/trazadoras1c2023.component';

const routes: Routes = [
    
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [GuardGuard] },
  { path: 'rendicion', component: RendicionComponent, canActivate: [GuardGuard] },
  { path: 'rendicion/grafico', component: ChartRendicionComponent, canActivate: [GuardGuard] },
  { path: 'transferencias', component: TransferenciasComponent, canActivate: [GuardGuard]},
  { path: 'transferencias/grafico', component: TransferenciasComponent, canActivate: [GuardGuard] },
  { path: 'usodefondos/grafico', component: UsodefondosComponent, canActivate: [GuardGuard] },
  { path: 'usodefondos/total', component: UsodefondosListComponent, canActivate: [GuardGuard] },
  { path: 'prestaciones/total', component: PrestEvolComponent, canActivate: [GuardGuard] },
  { path: 'prestaciones/total_monto', component: PrestEvolMontoComponent, canActivate: [GuardGuard] },
  { path: 'prestaciones/tipoprestacion', component: PrestTipoComponent, canActivate: [GuardGuard] },
  { path: 'prestaciones/grafico/total_monto', component: ChartPrestMontoComponent, canActivate: [GuardGuard] },
  { path: 'prestaciones/grafico/total', component: ChartPrestacionComponent, canActivate: [GuardGuard] },
  { path: 'prestaciones/grafico/ge', component: ChartPrestGeComponent, canActivate: [GuardGuard] },
  { path: 'prestaciones/grafico/tipoprestacion', component: ChartPrestTipoComponent, canActivate: [GuardGuard] },
  { path: 'inscriptos/total', component: InscriptosComponent, canActivate: [GuardGuard] },
  { path: 'inscriptos/inscriptos_ceb', component: InscriptosCebComponent, canActivate: [GuardGuard] },
  { path: 'inscriptos/inscriptos_ge', component: ChartInscripGeComponent, canActivate: [GuardGuard] },
  { path: 'inscriptos/ceb_ge', component: ChartCebGeComponent, canActivate: [GuardGuard] },
  { path: 'inscriptos/grafico', component: ChartInscriptosComponent, canActivate: [GuardGuard] },
  { path: 'trazadoras/trz_1c2022', component: TrazadorasComponent, canActivate: [GuardGuard] },
  { path: 'trazadoras/trz_2c2022', component: Trazadoras2c2022Component, canActivate: [GuardGuard] },
  { path: 'trazadoras/trz_3c2022', component: Trazadoras3c2022Component, canActivate: [GuardGuard] },
  { path: 'trazadoras/trz_1c2023', component: Trazadoras1c2023Component, canActivate: [GuardGuard]},
  { path: 'trazadoras/evolucion', component: TrzComparacionComponent, canActivate: [GuardGuard] },
  { path: 'trazadoras/grafico/evolucion', component: ChartTrzComponent, canActivate: [GuardGuard] },
  { path: 'sidebar', component: SidebarComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }