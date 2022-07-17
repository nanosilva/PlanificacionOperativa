import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RendicionComponent } from './components/rendicion/rendicion.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ChartRendicionComponent } from './components/chart-rendicion/chart-rendicion.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { UsodefondosComponent } from './components/usodefondos/usodefondos.component';
import { PrestEvolComponent } from './components/prest-evol/prest-evol.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChartPrestacionComponent } from './components/chart-prestacion/chart-prestacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RendicionComponent,
    FilterPipe,
    ChartRendicionComponent,
    UsodefondosComponent,
    PrestEvolComponent,
    HomeComponent,
    ChartPrestacionComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
