import { Injectable } from '@angular/core';
import { Contrato } from '../contratos/models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor() { }

  get(): Contrato[] {
    return JSON.parse(localStorage.getItem('contratos') || '{}');
  }
  post(contrato: Contrato) {
    let contratosArray: Contrato[] = [];
    if (this.get() != null) {
      contratosArray = this.get();
    }
    contratosArray.push(contrato);
    localStorage.setItem('contratos', JSON.stringify(contratosArray));
  }
}
