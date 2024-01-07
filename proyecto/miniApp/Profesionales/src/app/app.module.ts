import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { HomeComponent } from './pages/home/home.component';
import { CardPrfComponent } from './components/card-prf/card-prf.component';
import { FormsModule } from '@angular/forms';
import { ProfesionalesService } from './shared/profesionales.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfesionalesComponent,
    HomeComponent,
    CardPrfComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProfesionalesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
