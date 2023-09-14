import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnFunctionErrorService<T> {

  constructor() { }
  handelError(error:Error,errorValue:any)
  {
    console.error(error);
    return of(errorValue)
  }
}
