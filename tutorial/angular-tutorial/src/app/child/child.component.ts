import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() animal: string;
  @Output() changed = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.changed.emit('cat');
  }

}
