import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HarrypotterService } from '../harrypotter.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataStorage } from '../data-storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  item
  constructor(
    private harrypotterService: HarrypotterService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private _data:DataStorage,
    private location:Location
  ) { }
  data=[];key='house';groupArr=[];
  ngOnInit() {
    this.getHouseDetails()
  }
  getHouseDetails():void{
    // let dataArr = this.harrypotterService.getAllChars().subscribe((results)=>{
    //   this.data=results;
    //   this.groupItem(this.data);
    //   console.log("item inside house - "+this.item)
    // })
    // this.harrypotterService.setAllChars(JSON.stringify(dataArr));
    this.data = this.route.snapshot.data.users;
    console.log("get characters in characters component - "+this.data)
    this.groupItem(this.data);
  }
  groupItem(array: any[]){
    this.item = array.reduce((r,{house})=>{
        if(!r.some((o: { house: any; })=>o.house==house)){
          r.push({house,groupItem:array.filter(v=>v.house==house)});
    }
    return r;
    },[]);
  }

  getInfo(characters){
    if(!characters.house)
      characters.house="others";
    let objToSend: NavigationExtras = {
        queryParams: characters
    }
    this.router.navigate(['/charactersInHouse/'+characters.house],{ 
      state: { houseDetails: objToSend }});
  }
  goBack() : void {
    this.location.back()
  }
  images={
    'gryggindor':''
  }
}