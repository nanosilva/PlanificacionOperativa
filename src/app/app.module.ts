import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { ChartPrestGeComponent } from './components/chart-prest-ge/chart-prest-ge.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderPipe } from './order.pipe';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { Filter2Pipe } from './filter2.pipe';
import { InscriptosComponent } from './components/inscriptos/inscriptos.component';
import { InscriptosCebComponent } from './components/inscriptos-ceb/inscriptos-ceb.component';
import { ChartInscriptosComponent } from './components/chart-inscriptos/chart-inscriptos.component';
import { ChartInscripGeComponent } from './components/chart-inscrip-ge/chart-inscrip-ge.component';
import { ChartCebGeComponent } from './components/chart-ceb-ge/chart-ceb-ge.component';
import { Filter3Pipe } from './filter3.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrestEvolMontoComponent } from './components/prest-evol-monto/prest-evol-monto.component';
import { ChartPrestMontoComponent } from './components/chart-prest-monto/chart-prest-monto.component';
import { UsodefondosListComponent } from './components/usodefondos-list/usodefondos-list.component';
import { PrestTipoComponent } from './components/prest-tipo/prest-tipo.component';
import { ChartPrestTipoComponent } from './components/chart-prest-tipo/chart-prest-tipo.component';
import { TrazadorasComponent } from './components/trazadoras/trazadoras.component';
import { UniquePipe } from './unique.pipe';
import { AlphabeticalPipe } from './alphabetical.pipe';
import { TrzComparacionComponent } from './components/trz-comparacion/trz-comparacion.component';
import { ChartTrzComponent } from './components/chart-trz/chart-trz.component';
import { Unique2Pipe } from './unique2.pipe';
import { Trazadoras2c2022Component } from './components/trazadoras2c2022/trazadoras2c2022.component';
import { Trazadoras3c2022Component } from './components/trazadoras3c2022/trazadoras3c2022.component';
import { LoginComponent } from './components/login/login.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { Trazadoras1c2023Component } from './components/trazadoras1c2023/trazadoras1c2023.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerInterceptor } from './components/spinner/spinner.interceptor';
//firebase


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
    ChartPrestGeComponent,
    SidebarComponent,
    OrderPipe,
    TransferenciasComponent,
    Filter2Pipe,
    InscriptosComponent,
    InscriptosCebComponent,
    ChartInscriptosComponent,
    ChartInscripGeComponent,
    ChartCebGeComponent,
    Filter3Pipe,
    DashboardComponent,
    PrestEvolMontoComponent,
    ChartPrestMontoComponent,
    UsodefondosListComponent,
    PrestTipoComponent,
    ChartPrestTipoComponent,
    TrazadorasComponent,
    UniquePipe,
    AlphabeticalPipe,
    TrzComparacionComponent,
    ChartTrzComponent,
    Unique2Pipe,
    Trazadoras2c2022Component,
    Trazadoras3c2022Component,
    LoginComponent,
    PlanificacionComponent,
    Trazadoras1c2023Component,
    SpinnerComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    AppRoutingModule,
    
    
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
