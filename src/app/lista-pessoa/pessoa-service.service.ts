import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  nomesPessoas: string[] = ['joão','Maria','Angular 2','Thiago'];

  constructor() { }

  getPessoas(): string[]{
    return this.nomesPessoas;
  }

  setPessoa(nome: string): void{
    this.nomesPessoas.push(nome);
  }

}
