import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendicionComponent } from './components/rendicion/rendicion.component';
import { ChartRendicionComponent} from './components/chart-rendicion/chart-rendicion.component';
import { HomeComponent } from './components/home/home.component';
import { PrestEvolComponent } from './components/prest-evol/prest-evol.component';
import { ChartPrestacionComponent } from './components/chart-prestacion/chart-prestacion.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rendicion', component:RendicionComponent },
  { path: 'grafico/rendicion', component: ChartRendicionComponent },
  { path: 'prestaciones', component: PrestEvolComponent },
  { path: 'grafico/prestaciones', component: ChartPrestacionComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }