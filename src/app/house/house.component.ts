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
    // console.log(JSON.stringify(characters));
    const data : Object = JSON.stringify(characters);
   this.router.navigate(['/charactersInHouse',{ queryParams: { house:data}}],{relativeTo:this.route}); 
  // this.http.post('/charactersInHouse',JSON.stringify(characters));
  }
  
}