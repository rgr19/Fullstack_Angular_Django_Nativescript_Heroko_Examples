import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-app-component-first',
  templateUrl: './app-component-first.component.html',
  styleUrls: ['./app-component-first.component.css']
})
export class AppComponentFirstComponent implements OnInit {

  outForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  sendForm = () => {
    console.log(this.outForm.value);
  }

}
