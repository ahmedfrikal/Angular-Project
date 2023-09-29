import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonServiceService } from 'src/app/services/pokemon/pokemon-service.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  searchTerms=new Subject<string>();// class nous permet de stocker les rechrhce succicive 
  //ex : {..."aa".."ab".."abz"..} Stocker mles rechjerche de user
  pokemons$!:Observable<Pokemon[]>;
  // {...pokemonList(aa)..pokemonlist(abc)}
  constructor(private router:Router,private service:PokemonServiceService){}
  ngOnInit(): void {
    this.pokemons$=this.searchTerms.pipe(

    //  {..."aa".."ab".."abz"..."ab"..."abc"...} 
    debounceTime(300),
    //{....."ab"...."ab"..."abc".....}
    //Programmation reactive eliminer ds requetes danger quand on fait la recherche rst ulisateur trompe 
    distinctUntilChanged(),
    //{..."ab"...."abc"......} //eliminer les doublon de rechreche 
    switchMap((term)=>this.service.FindPokemonByNameContains(term))
         //{...FindPokemonByNameContains(ab)....Observable<"abc">......} //Avoir la recherche pour appeler 
    
        //concatMap /metgeMap/switchmap
    );
  }
  search(term:string){
    this.searchTerms.next(term);
  }

  goToDetail(pokemon:Pokemon){
    const link=['/Pokemons',pokemon.id];
    this.router.navigate(link);
  }


}
