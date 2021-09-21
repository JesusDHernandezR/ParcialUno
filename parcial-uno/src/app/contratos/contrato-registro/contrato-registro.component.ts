import { Component, OnInit } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato } from '../models/contrato';

@Component({
  selector: 'app-contrato-registro',
  templateUrl: './contrato-registro.component.html',
  styleUrls: ['./contrato-registro.component.css']
})
export class ContratoRegistroComponent implements OnInit {
  contrato!: Contrato;
  
  constructor(private contratoService:ContratoService) {
    
   }

  ngOnInit() {
    this.contrato=new Contrato;
  }
  add(){
    alert("se agregó un contrato"+JSON.stringify(this.contrato));
    this.contratoService.post(this.contrato);
  }

}
