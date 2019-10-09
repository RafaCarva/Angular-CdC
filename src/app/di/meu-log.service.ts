import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuLogService {

  constructor() { }

  setLog(msg:string){
    console.log(msg);
  }
}