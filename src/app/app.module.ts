import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RendicionComponent } from './components/rendicion/rendicion.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RendicionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
