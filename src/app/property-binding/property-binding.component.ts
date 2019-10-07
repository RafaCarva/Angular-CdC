import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  
  verParagrafo: boolean = true;
  
  constructor() { }

  mostrar(): boolean{
    return this.verParagrafo = !this.verParagrafo;
  }

  ngOnInit() {
  }

}