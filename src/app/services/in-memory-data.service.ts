import { Injectable } from '@angular/core';
import {InMemoryDbService,RequestInfo} from 'angular-in-memory-web-api';
import { POKEMONS } from '../Component/mock-pokemon-list';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const pokemons=POKEMONS;
    return{pokemons};
  }
}
