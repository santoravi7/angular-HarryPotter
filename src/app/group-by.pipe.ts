import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(array:any[], property: string): any[]  {
    
    const groupedCollection = array.reduce((previous, current)=> {
      if(!previous[current[property]]) {
          previous[current[property]] = [current];
      } else {
          previous[current[property]].push(current);
      }
      // console.log("INSIE PIPE - "+property)
      return previous;
  }, {});

  // this will return an array of objects, each object containing a group of objects
  return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

}