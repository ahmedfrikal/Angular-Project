import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from 'src/app/services/pokemon/pokemon-service.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonServiceService
  ) { }
  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.FindById(+pokemonId)
                         .subscribe(pokemon=>this.pokemon=pokemon);
    }
    else {
      this.pokemon = undefined;
    }
  }
}
