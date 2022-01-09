import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../characters/characters.component';
import { HouseComponent } from '../house/house.component';
import { AllCharsInHouseComponent } from '../all-chars-in-house/all-chars-in-house.component';


const routes: Routes = [
  { path: '', redirectTo:'/characters',pathMatch:'full'},
  { path: 'characters', component: CharactersComponent },
  { path: 'house', component: HouseComponent},
  { path:'charactersInHouse/:houseName',component: AllCharsInHouseComponent}
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
  AllCharsInHouseComponent
]
