import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-app-component-second',
  templateUrl: './app-component-second.component.html',
  styleUrls: ['./app-component-second.component.css']
})
export class AppComponentSecondComponent implements OnInit {

  myAnimal = 'dog';
  childAnimal = '';

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    let ourId = +this.route.snapshot.paramMap.get('id');
    console.log('Second: id=%d', ourId);
  }

  btnClicked = () => {
    this.location.back();
  }

  childChanged = (evt) => {
    console.log('Child changes: %s', evt);
    this.childAnimal = evt;
  }

}
