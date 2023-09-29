import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonsComponent } from '../Component/Pokemons/list-pokemons/list-pokemons.component';
import { DetailPokemonsComponent } from '../Component/Pokemons/detail-pokemons/detail-pokemons.component';
import { BorderCardDirective } from '../Directive/border-card.directive';
import { PokemonTypeColorPipe } from '../Pips/pokemon-type-color.pipe';
import { RandomPokemonsComponent } from '../Component/Pokemons/random-pokemons/random-pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { PokemonFormComponent } from '../Component/Pokemons/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from '../Component/Pokemons/edit-pokemon/edit-pokemon.component';
import { AddPokemonsComponent } from '../Component/Pokemons/add-pokemons/add-pokemons.component';
import { SearchPokemonComponent } from '../Component/Pokemons/search-pokemon/search-pokemon.component';

const pokemonRoutes:Routes=[
  {path:'Pokemons',component:ListPokemonsComponent},
  {path:'Pokemons/:id',component:DetailPokemonsComponent},
  {path:'Pokemons/edit/:id',component:EditPokemonComponent},
  {path:'Pokemon/add',component:AddPokemonsComponent},
  {path:'Random/Pokemons',component:RandomPokemonsComponent},
]

@NgModule({
  declarations: [
    ListPokemonsComponent,
    DetailPokemonsComponent,
    PokemonFormComponent,
    RandomPokemonsComponent,
    EditPokemonComponent,
    AddPokemonsComponent,
    SearchPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(pokemonRoutes)
    ]
})
export class PokemonModule { }
 