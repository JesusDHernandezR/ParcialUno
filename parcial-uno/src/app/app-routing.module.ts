import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoConsultaComponent } from './contratos/contrato-consulta/contrato-consulta.component';
import { ContratoRegistroComponent } from './contratos/contrato-registro/contrato-registro.component';

const routes: Routes = [
  {
    path: 'contratoConsulta',
    component: ContratoConsultaComponent
  },
  {
    path: 'contratoRegistro',
    component: ContratoRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
