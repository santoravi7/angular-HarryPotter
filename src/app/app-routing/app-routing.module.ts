import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../characters/characters.component';
import { HouseComponent } from '../house/house.component';
import { AllCharsInHouseComponent } from '../all-chars-in-house/all-chars-in-house.component';
import { HomeComponent } from '../home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { CharDetailsComponent } from '../char-details/char-details.component';
import { UserResolver } from '../user.resolver';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  //the below path is using RESOLVE to load the content
  {
    path: 'characters',
    component: CharactersComponent,
    resolve: {
      users: UserResolver
    }
  },
  // { path: 'characters', component: CharactersComponent },
  { path: 'house', component: HouseComponent},
  { path:'charactersInHouse/:houseName',component: AllCharsInHouseComponent},
  {path:'chardetails/:charId',component:CharDetailsComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule {}

export const routingComponents=[
  CharactersComponent,
  HouseComponent,
  AllCharsInHouseComponent,
  HomeComponent,
  CharDetailsComponent,
  PagenotfoundComponent
]
