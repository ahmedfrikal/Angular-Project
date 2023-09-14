import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';

const routes: Routes=[

  {path:'',redirectTo:'Pokemons',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
