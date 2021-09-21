import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratoConsultaComponent } from './contratos/contrato-consulta/contrato-consulta.component';
import { ContratoRegistroComponent } from './contratos/contrato-registro/contrato-registro.component';
import { ContratoService } from './services/contrato.service';

@NgModule({
  declarations: [
    AppComponent,
    ContratoConsultaComponent,
    ContratoRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
