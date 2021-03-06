import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
    private route: ActivatedRoute,public loader: LoaderService) { }

  ngOnInit() {
  }

  houseView():void{
    this.router.navigate(['/house'], {relativeTo:this.route});
  }
  charView():void{
    this.router.navigate(['/characters'], {relativeTo:this.route});
  }
}