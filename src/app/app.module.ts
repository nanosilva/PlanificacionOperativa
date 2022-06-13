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
@NgModule({
  declarations: [
    AppComponent,
    RendicionComponent,
    FilterPipe,
    ChartRendicionComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
