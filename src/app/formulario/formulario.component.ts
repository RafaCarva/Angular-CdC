import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Rafael','(99)9999-9999','email@email.com');

  constructor() { }

  ngOnInit() {
  }

  enviarDados(){
    alert(`seu nome é: ${this.contato.nome}\n`
      + `seu telefone é ${this.contato.telefone}\n`
      + `seu email é ${this.contato.email}`
    );
  }

}
