import { Component } from '@angular/core';
import {AlertaService} from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-CdC';

  constructor(private service: AlertaService){

  }

  enviarMsg():void{
    this.service.msgAlerta();
  }

}
