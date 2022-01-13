import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HarrypotterService } from '../harrypotter.service';
import { DataStorage } from '../data-storage';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css']
})
export class CharDetailsComponent implements OnInit {
  data=[];charData;
  constructor( 
    private harrypotterService:HarrypotterService,
    private location:Location,
    private route:ActivatedRoute,
    private router:Router,
    private _data:DataStorage,
  ) { }

  ngOnInit() {
    this.getCharDetails();
  }

  getCharDetails(){
    this.charData = JSON.parse(this._data.data);
    // const charId = this.route.snapshot.paramMap.get('charId');
    // const charName = this.route.snapshot.paramMap.get('charName');
    // console.log("charId - "+charId);
    // var stringArray = charName.split(/(\s+)/);
    // console.log("char NAme - "+stringArray[0]);
    // this.harrypotterService.getAllChars().subscribe((results) =>  {
    //   const index = Object.values(results).indexOf(stringArray[0]);
    //   console.log("index - "+index);
    //   this.charData = [(results)[charId]]
    //   console.log(this.charData)
    // })
  }

  goBack() : void {
    this.location.back()
  }
}