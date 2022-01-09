import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    let dataArr = this.harrypotterService.getAllChars().subscribe((results)=>{
      this.data=results;
    })
    // this.harrypotterService.setAllChars(JSON.stringify(dataArr));
  }
  getInfo(characters){
    console.log("Character house - "+characters.key);
    const data : Object =(characters); 
    this._data.data=JSON.stringify(characters);
    this.router.navigate(['/charactersInHouse/'+characters.key],{relativeTo:this.route});
    // this.router.navigateByUrl(this.router.createUrlTree(['/charactersInHouse/'+characters.key,{ house:JSON.stringify(data)}]));
   
  // this.http.post('/charactersInHouse',JSON.stringify(characters));
  }
  goBack() : void {
    this.location.back()
  }
  images={
    'gryggindor':''
  }
}