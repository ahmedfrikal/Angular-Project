import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Pokemon';

@Component({
  selector: 'app-add-pokemons',
  templateUrl: './add-pokemons.component.html',
  styleUrls: ['./add-pokemons.component.css']
})
export class AddPokemonsComponent implements OnInit {

pokemon:Pokemon | undefined;
ngOnInit(): void {
  this.pokemon=new Pokemon();
}
}
