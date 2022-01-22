import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HarrypotterService } from './harrypotter.service';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
constructor(private harrypotterService:HarrypotterService){}
resolve() : Observable<any> {
  return this.harrypotterService.getAllChars();
}
}
