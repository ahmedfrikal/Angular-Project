
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Pokemon } from 'src/app/Component/Pokemon';
import { POKEMONS } from 'src/app/Component/mock-pokemon-list';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { ReturnFunctionErrorService } from '../return-function-error.service';
import { ReturnFunctionSuccesService } from '../return-function-succes.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
 
  pokemonList=POKEMONS;
  constructor(private http:HttpClient,
              private error:ReturnFunctionErrorService<Pokemon>,
              private succes:ReturnFunctionSuccesService<Pokemon>,
              ) { }
  FindAll():Observable<Pokemon[]>{
  
  // return this.pokemonList;
  //On fait un get http 
  return this.http.get<Pokemon[]>('api/pokemons').pipe(
    tap((response)=>this.succes.log(response)), //Quand on log la reponse 
    catchError((errore)=>this.error.handelError(errore,[])));
  }

  FindById(id:number):Observable<Pokemon|undefined>{
   /* const pokemons=this.pokemonList
                       .find(element=>element.id===id);
    return pokemons;*/
   return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
    tap((pokemon)=>console.log(pokemon)),
    catchError((errore)=>this.error.handelError(errore,undefined))
   );

  }
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}) // Use 'headers' with lowercase 'h'
    };
  
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((updatedPokemon) => this.succes.log(updatedPokemon)),
      catchError((error) => this.error.handelError(error, null))
    );
  }
  deletePokemon(pokemonId: number) {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response)=>this.succes.log(response)),
      catchError((error)=>this.error.handelError(error,null))
    );
  }
  addPokemon(pokemon:Pokemon):Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}) // Use 'headers' with lowercase 'h'
    };
    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((response)=>this.succes.log(response)),
      catchError((error)=>this.error.handelError(error,null))
    )
  }
  
  PokemonsTypes(){
     const PokemonsTypes=this.pokemonList
                              .flatMap((pokemonsType)=>pokemonsType.types)
                              .filter((value,index,self)=>self.indexOf(value)===index);
    return PokemonsTypes;
  }

  getNumberReturn(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
