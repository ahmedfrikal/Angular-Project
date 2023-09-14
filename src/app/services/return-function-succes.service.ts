import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturnFunctionSuccesService<T> {

  constructor() { }
  log(reponse:any){
    console.log(reponse);
  }
}
