import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable({
  providedIn: 'root'
})
export class NomesTecService {

  //@optional() vai tornar a DI não obrigatória, assim a classe não quebra caso ele não seja injetado.
  constructor(@Optional() private meulog: MeuLogService) { }

  getNomesTec(): string[]{

    if(this.meulog){
      this.meulog.setLog("consultou o array de tecnologias.");
    }
    return ['Maya','Angular 2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Desenvolvendo com Angular 2' ];
  }

}
