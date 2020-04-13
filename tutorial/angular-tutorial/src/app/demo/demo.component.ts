import {Component, OnInit} from '@angular/core';
import {PeopleService} from "./people.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  styles: ['h2 { color: green; }']
})

export class DemoComponent implements OnInit {

  name = "Jon";
  counter = 0;
  mycolor = 'pink';
  people = [];
  today = new Date();
  cash = 2.89;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    console.log('DemoComponent Initiated');
    this.counter = 2;
    this.people = this.peopleService.allPeople();

    this.peopleService.newObservable$.subscribe(
      data => {
        console.log('Observed data: ', data);
      },
      error => {
        console.log('error: %s', error);
      }
    );
  }

  btnClickedNull = () => {
    console.log("Button was clicked!")
  }

  btnClickedCounterIncrement = () => {
    console.log("Button was clicked, counter += 1 : ", this.counter++);
  }
  btnClickedCounterDecrement = () => {
    console.log("Button was clicked, counter -= 1: ", this.counter--);
  }

  btnClickedWithInput = (evt) => {
    console.log("Button was clicked!", evt)
  }

  btnClickedTwoWayInput = (inpt) => {
    console.log("Button was clicked!", inpt)
  }

  changeNameDynamic = () => {
    console.log("Button for changing name was clicked!")
    this.name = "Ala"
  }


}
