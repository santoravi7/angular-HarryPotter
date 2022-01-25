import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class HarrypotterService {
  item: any;
  constructor(private http: HttpClient) {}
  private charUrl = 'https://hp-api.herokuapp.com/api/characters';

  getAllChars(): Observable<any> {
    return this.http.get(this.charUrl)    
  }

  groupItem(array,key) {
    if(key==='name')
      this.item = this.groupItemName(array,key)
    if(key==='house')
      this.item = this.groupItemHouse(array,key)
    return this.item
  }

  groupItemName(array,name){
    return array.reduce((r,{name})=>{
        if(!r.some((o: { name: any; })=>o.name==name)){
          r.push({name,groupItem:array.filter(v=>v.name==name)});
    }
    return r;
    },[]);
  }

  groupItemHouse(array,house){
    return array.reduce((r,{house})=>{
        if(!r.some((o: { house: any; })=>o.house==house)){
          r.push({house,groupItem:array.filter(v=>v.house==house)});
    }
    return r;
    },[]);
  }

}
