import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HarrypotterService } from '../harrypotter.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private http: HttpClient
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
    this.router.navigateByUrl(this.router.createUrlTree(['/charactersInHouse/'+characters.key,{ house:JSON.stringify(data)}]));
  // this.http.post('/charactersInHouse',JSON.stringify(characters));
  }
  
}