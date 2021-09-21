import { Component, OnInit } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato } from '../models/contrato';

@Component({
  selector: 'app-contrato-consulta',
  templateUrl: './contrato-consulta.component.html',
  styleUrls: ['./contrato-consulta.component.css']
})
export class ContratoConsultaComponent implements OnInit {
  contratosArray:Contrato[]=[];
  searchText:string="";
  constructor(private contratoService:ContratoService) { 
    
  }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.contratosArray=this.contratoService.get();
  }

}
