import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }

  getNumberOf(list:any[], critiria: string, value:any){
    let  nbrElm = 0;
        for (let i of list){
         if(list[i][critiria] === value){
          nbrElm++
         }
        }  
        return nbrElm  ;
  }
}
