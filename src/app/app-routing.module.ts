import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendicionComponent } from './components/rendicion/rendicion.component';
import { ChartRendicionComponent } from './components/chart-rendicion/chart-rendicion.component';
import { HomeComponent } from './components/home/home.component';
import { PrestEvolComponent } from './components/prest-evol/prest-evol.component';
import { ChartPrestacionComponent } from './components/chart-prestacion/chart-prestacion.component';
import { ChartPrestGeComponent } from './components/chart-prest-ge/chart-prest-ge.component';
import { UsodefondosComponent } from './components/usodefondos/usodefondos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rendicion', component: RendicionComponent },
  { path: 'rendicion/grafico', component: ChartRendicionComponent },
  { path: 'usodefondos/grafico', component: UsodefondosComponent },
  { path: 'prestaciones', component: PrestEvolComponent },
  { path: 'prestaciones/grafico', component: ChartPrestacionComponent },
  { path: 'prestaciones/grafico/ge', component: ChartPrestGeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }