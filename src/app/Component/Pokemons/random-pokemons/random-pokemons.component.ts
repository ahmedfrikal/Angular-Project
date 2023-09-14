import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../../Pokemon';
import { POKEMONS } from '../../mock-pokemon-list';
import { PokemonServiceService } from 'src/app/services/pokemon/pokemon-service.service';

@Component({
  selector: 'app-random-pokemons',
  templateUrl: './random-pokemons.component.html',
  styleUrls: ['./random-pokemons.component.css']
})
export class RandomPokemonsComponent implements OnInit{

  pokemonList=POKEMONS;
  public pokemonName :string='';
  pokemon:Pokemon|undefined;
  constructor(public pokemonService :PokemonServiceService) {}
  ngOnInit(): void {
    this.FindPokemonsByIdRandom();
  }
  private GetPokemonById(id:number){
    const pokemon=this.pokemonList.find((Pokemon,index)=>index===id);
    if(pokemon!==undefined){
      return  pokemon;
    }
    return undefined;
  }
  serachPokemons(pokemon :Pokemon){
    const  indice=this.pokemonService.getNumberReturn(0,this.pokemonList.length);
    console.log("vous avez choisi le pokomons suivant :"+this.pokemonList[indice].name);
  }
  FindPokemonsById(event :MouseEvent){
   /* Recuper la valeur depuis la zone de text il faut mentionner le event dans la partie html  */
     const indice= parseInt((event.target as HTMLInputElement).value);
      const pokemon=this.GetPokemonById(indice);
      if(pokemon!=undefined)this.pokemonName=pokemon.name;
  }
  FindPokemonsByIdRandom(){
    const  index=this.pokemonService.getNumberReturn(0,this.pokemonList.length);
    const pokemons=this.pokemonService.FindById(index);
    if(pokemons!==undefined) this.pokemonService.FindById(+index)
    .subscribe(pokemon=>this.pokemon=pokemon);
  }

}
