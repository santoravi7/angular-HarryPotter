import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { HarrypotterService } from '../harrypotter.service';
import { DataStorage } from '../data-storage';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any;
  response: any;
  searchText
  constructor(private harrypotterService: HarrypotterService,
    private router: Router,
    private route: ActivatedRoute,
    private location:Location,
    private _data:DataStorage,
  ) {}

  data=[]; item; key='name'

  ngOnInit() {
    this.getCharacters();
  }
  
  getCharacters(): void {
    this.data = this.route.snapshot.data.users;
    this.item = this.harrypotterService.groupItem(this.data,this.key)    
  }

  houseView():void{
    this.router.navigate(['/house'], {relativeTo:this.route});
  }

  goBack() : void {
    this.location.back()
  }
  
  viewCharDetails(characters,charId):void{
    let objToSend: NavigationExtras = {
        queryParams: characters
    }
    this._data.data=JSON.stringify(characters);
    this.router.navigate(['/chardetails/'+charId],{ 
      state: { charDetails: objToSend }})
  }
}
