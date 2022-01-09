import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.houseName = JSON.parse(this.route.snapshot.paramMap.get('house'))
    this.count = this.houseName.value.length
    // console.log("houseName params - "+this.houseName)    
  }
}