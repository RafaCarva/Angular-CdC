import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Importe EventEmitter de @angular/core e não de 'protractor'

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  //O decorador @input permite que o pai (app.component) manipule a var.
  @Input() menu: string;

  //O decorator @output permite que o filho se comunique com o pai.
  @Output() nomeClicado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarNome(value){
    this.nomeClicado.emit(value);
  }

}
