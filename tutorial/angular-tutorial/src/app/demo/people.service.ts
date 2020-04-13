import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  newObservable$ = new Observable(
    observer => {
      observer.next('Hello!');
    }
  );

  people = [
    {name: 'Chuck', age: 100},
    {name: 'Ala', age: 24},
    {name: 'Bala', age: 35},
    {name: 'Else', age: 15}
  ];

  constructor() {
  }

  allPeople() {
    return this.people;
  }


}
