import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { HarrypotterService } from '../harrypotter.service';

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
    private location:Location
  ) {}

  data=[];

  ngOnInit() {
    this.getCharacters();
  }
  
  getCharacters(): void {
    this.harrypotterService.getAllChars().subscribe((results) =>  {
      this.data = results;
    })
    console.log(this.data);
  }
  houseView():void{
    this.router.navigate(['/house'], {relativeTo:this.route});
  }
  goBack() : void {
    this.location.back()
  }
}
