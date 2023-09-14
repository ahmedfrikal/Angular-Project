import { Pipe, PipeTransform } from '@angular/core';
import { POKEMONS } from '../Component/mock-pokemon-list';
import { PokemonServiceService } from '../services/pokemon/pokemon-service.service';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

 Pokemons=POKEMONS;
 private colorTypeDefault:string='badge rounded-pill bg-info text-dark';
 constructor(private pokemonsService:PokemonServiceService){}
 PokemonsType() {
 /*flatMap=>extraire tous les type de pokemons 
  Filtrer =>pour suprimer les doublonns
  */
   return this.pokemonsService.PokemonsTypes();
  //console.log(uniqueTypes);
   
 }
 getColorsTypePokemons(){
  const colors:string[]=['badge bg-primary','badge bg-secondary','badge bg-success','badge bg-danger','badge bg-warning text-dark','badge bg-info text-dark','badge bg-info text-dark','badge rounded-pill bg-primary']
  return colors; 
}

  transform(type: string): string {
    //this.PokemonsType();
    let color=this.colorTypeDefault;
    const typePokemons=this.PokemonsType();
    const colors=this.getColorsTypePokemons(); 
    for(let i=0;i<typePokemons.length;i++){
      switch (type) {
        case typePokemons[i]:
          color = colors[i];    
      }
    }
    return color;  
  }

}
