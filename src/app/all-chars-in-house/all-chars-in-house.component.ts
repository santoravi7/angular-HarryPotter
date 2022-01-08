import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HarrypotterService } from '../harrypotter.service';

@Component({
  selector: 'app-all-chars-in-house',
  templateUrl: './all-chars-in-house.component.html',
  styleUrls: ['./all-chars-in-house.component.css']
})
export class AllCharsInHouseComponent implements OnInit {
  data:any;
  houseName
  constructor(
    private harrypotterService:HarrypotterService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  // this.houseName=JSON.parse(this.route.snapshot.paramMap.get('house'))
  // console.log("house name - "+this.houseName)
  //  this.harrypotterService.getAllChars().subscribe((results)=>{
  //     this.data=results;
  //   })
    this.route.queryParams.subscribe(
      params=>{
        let data = (params['house']);
        console.log("params in all chars - "+data)
      }
    )
  }

}