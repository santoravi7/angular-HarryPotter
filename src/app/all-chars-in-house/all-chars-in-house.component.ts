import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
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
  constructor(
    private harrypotterService:HarrypotterService,
    private route:ActivatedRoute,
    private _data:DataStorage,
    private location:Location,
    private router:Router
  ) { }

  ngOnInit() {
    // this.houseName = JSON.parse(this.route.snapshot.paramMap.get('house'))
    this.houseName = JSON.parse(this._data.data);
    this.count = this.houseName.value.length
    console.log("houseName params - "+this.houseName);    
  }
  goBack() : void {
    this.location.back()
  }
  data=[]
  viewCharDetails(charName,charId):void{
    // const charName = +this.route.snapshot.paramMap.get('charName');
    this.router.navigate(['/chardetails/'+charId,{charId:charId,charName:charName}],{relativeTo:this.route})
  }
}