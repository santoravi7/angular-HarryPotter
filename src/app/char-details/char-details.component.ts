import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HarrypotterService } from '../harrypotter.service';
import { DataStorage } from '../data-storage';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css']
})
export class CharDetailsComponent implements OnInit {
  data=[];charData;charName;charId
  constructor( 
    private harrypotterService:HarrypotterService,
    private location:Location,
    private route:ActivatedRoute,
    private router:Router,
    private _data:DataStorage,
  ) { }
  currentState$: Observable<any>;
  ngOnInit() {
    this.getCharDetails();
  }

  getCharDetails(){
    this.currentState$ = this.route.paramMap.pipe(
      map(() => window.history.state.charDetails.queryParams)
    ); 
    console.log("current state - "+JSON.stringify(this.currentState$))
    this.currentState$.subscribe((results) =>  {
      this.charData = results;
      console.log("Character in subscribe = "+JSON.stringify(results))
    });
    this.route.queryParams.subscribe(params => {
      this.charName = params
      console.log("params - "+params);
    });
  }

  goBack() : void {
    this.location.back()
  }
}