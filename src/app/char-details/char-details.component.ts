import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HarrypotterService } from '../harrypotter.service';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css']
})
export class CharDetailsComponent implements OnInit {
  data=[];prop;
  constructor( 
    private harrypotterService:HarrypotterService,
    private location:Location,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.getCharDetails();
  }

  getCharDetails(){
    const charId = +this.route.snapshot.paramMap.get('charId');
    this.harrypotterService.getAllChars().subscribe((results) =>  {
      this.data = results;
    })
  }

  goBack() : void {
    this.location.back()
  }
}