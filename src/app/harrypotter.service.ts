import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class HarrypotterService {
private jsonData: Object;
  constructor(private http: HttpClient) {}
  private charUrl = 'https://hp-api.herokuapp.com/api/characters';

  getAllChars(): Observable<any> {
    return this.http.get(this.charUrl)
    console.log("this is service");
  }

  setAllChars(jsonData:any){
    console.log("json data before - "+jsonData);this.jsonData=jsonData;
    console.log("json data set - "+this.jsonData);
  }

  getCharsInHouse(){
    return this.jsonData;
  }

}
