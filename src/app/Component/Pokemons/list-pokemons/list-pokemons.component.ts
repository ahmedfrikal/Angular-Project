import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../../mock-pokemon-list';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../Pokemon';
import { PokemonServiceService } from 'src/app/services/pokemon/pokemon-service.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {

  pokemonList: Pokemon[]=[];
  
  constructor(private route:ActivatedRoute, private router:Router,private pokemonsService :PokemonServiceService){}
  
  ngOnInit(): void {
     /* this.pokemonsService.FindAll().subscribe(pokemonList=>this.pokemonList=pokemonList);*/
     this.pokemonsService.FindAll().subscribe((pokemonList) => {
      this.pokemonList = pokemonList; // Assign the result to the property
    });
  }
  DetailsPokemon(id: number) {
    const url=this.route.snapshot.routeConfig?.path;
     this.router.navigate([url,id]);
   }
   addPokemon() {
     this.router.navigate(['Pokemon/add']);
   }

}
