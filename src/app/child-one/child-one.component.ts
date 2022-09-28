import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  @Input() title: string;
  @Input() messageForChild: string;
  @Output() foo = new EventEmitter<any>();
  message = 'Im not tidying my room';

  constructor() { }
  ngOnInit() {
  }

  invokeToParent() {
    this.foo.emit('a');
  }
}
