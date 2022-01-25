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

  data=[];
  key='house';
  groupArr=[];

  ngOnInit() {
    this.getHouseDetails()
  }

  getHouseDetails():void{
    this.data = this.route.snapshot.data.users;
    this.item = this.harrypotterService.groupItem(this.data,this.key)
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
}