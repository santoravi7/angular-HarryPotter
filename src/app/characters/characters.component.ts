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

  data=[];item;

  ngOnInit() {
    this.getCharacters();
  }
  
  getCharacters(): void {
    // this.harrypotterService.getAllChars().subscribe((results) =>  {
    //   this.data = results;
    //   // console.log("get characters in characters compoent - "+this.data)
    //   this.groupItem(this.data);
    // });
    this.data = this.route.snapshot.data.users;
    console.log("get characters in characters component - "+this.data)
    this.groupItem(this.data);
  }

  groupItem(array: any[]){
    this.item = array.reduce((r,{name})=>{
        if(!r.some((o: { name: any; })=>o.name==name)){
          r.push({name,groupItem:array.filter(v=>v.name==name)});
    }
    return r;
    },[]);
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
