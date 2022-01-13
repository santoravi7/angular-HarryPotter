import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
  constructor(private harrypotterService: HarrypotterService,
    private router: Router,
    private route: ActivatedRoute,
    private location:Location,
    private _data:DataStorage,
  ) {}

  data=[];

  ngOnInit() {
    this.getCharacters();
  }
  
  getCharacters(): void {
    this.harrypotterService.getAllChars().subscribe((results) =>  {
      this.data = results;
      console.log("get characters in characters compoent - "+this.data)
    })
    ;
  }
  houseView():void{
    this.router.navigate(['/house'], {relativeTo:this.route});
  }
  goBack() : void {
    this.location.back()
  }
  viewCharDetails(characters,charId):void{
    this._data.data=JSON.stringify(characters);
    // const charName = +this.route.snapshot.paramMap.get('charName');
    this.router.navigate(['/chardetails/'+charId,{charId:charId}],{relativeTo:this.route})
  }
}
