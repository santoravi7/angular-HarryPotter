import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Location } from '@angular/common';
import { DataStorage } from '../data-storage';
import { HarrypotterService } from '../harrypotter.service';

@Component({
  selector: 'app-all-chars-in-house',
  templateUrl: './all-chars-in-house.component.html',
  styleUrls: ['./all-chars-in-house.component.css']
})
export class AllCharsInHouseComponent implements OnInit {
  count
  houseName
  item
  constructor(
    private harrypotterService:HarrypotterService,
    private route:ActivatedRoute,
    private _data:DataStorage,
    private location:Location,
    private router:Router
  ) { }

  currentState$:Observable<any>;
    charData
  ngOnInit() {
    this.currentState$ = this.route.paramMap.pipe(
      map(() => window.history.state.houseDetails.queryParams)
    ); 
    console.log("current state all chars - "+this.currentState$)
    this.currentState$.subscribe((results) =>  {
      this.charData = results;
      // this.groupItem((this.charData));
      console.log("Character in subscribe = "+(results))
    });
    this.count = Object.keys(this.charData.groupItem).length
    
  }

  groupItem(array: any[]){
    this.item = array.reduce((r,{name})=>{
        if(!r.some((o: { name: any; })=>o.name==name)){
          r.push({name,groupItem:array.filter(v=>v.house==name)});
    }
    return r;
    },[]);
  }

  goBack() : void {
    this.location.back()
  }
  data=[]
  viewCharDetails(characters,charId):void{
    console.log("characters in all char - "+JSON.stringify(characters))
    let objToSend: NavigationExtras = {
      queryParams: characters
  }
    // const charName = +this.route.snapshot.paramMap.get('charName');
    this.router.navigate(['/chardetails/'+charId],{ 
      state: { charDetails: objToSend }})
  }
}