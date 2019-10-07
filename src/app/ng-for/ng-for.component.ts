import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: any[] = [
    {id: 1, nome: 'João'},
    {id: 2, nome: 'Pedro'},
    {id: 3, nome: 'Vraska'},
    {id: 4, nome: 'Claudia'}
  ];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Analizando no inspector, ele vai apenas add a linha 5 e alterar a linha 2.
   */
  atualizar(){
    this.nomes = [
      {id: 1, nome: 'João'},
      {id: 2, nome: 'rrrrr'},
      {id: 3, nome: 'Vraska'},
      {id: 4, nome: 'Claudia'},
      {id: 5, nome: 'Romário'},
    ];
  }

  meuSave(index:number, nomes:any){
    return nomes.id;
  }
}
