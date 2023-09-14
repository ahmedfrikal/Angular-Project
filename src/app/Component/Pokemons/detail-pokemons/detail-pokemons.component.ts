import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../Pokemon';
import { POKEMONS } from '../../mock-pokemon-list';
import { PokemonServiceService } from 'src/app/services/pokemon/pokemon-service.service';

@Component({
  selector: 'app-detail-pokemons',
  templateUrl: './detail-pokemons.component.html',
  styleUrls: ['./detail-pokemons.component.css']
})
export class DetailPokemonsComponent implements OnInit {
  ListPokemons!: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonServiceService) { }

  ngOnInit(): void {
    const PokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (PokemonId)
      this.pokemonsService.FindById(+PokemonId).subscribe(pokemon=>this.pokemon=pokemon);
  }

  listePokemons() {
    this.router.navigate(['/Pokemons']);
  }
  editPokemon(pokemon :Pokemon){
   this.router.navigate(['/Pokemons/edit/',pokemon.id]);
  }
  deletePokemon(pokemon:Pokemon){
    this.pokemonsService.deletePokemon(pokemon.id)
                        .subscribe(()=>this.router.navigate(['/Pokemons']));
  }
  

}
