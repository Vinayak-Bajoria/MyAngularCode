import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildTwoComponent} from '../child-two/child-two.component';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  @ViewChild(ChildTwoComponent) childComp;
  message: string;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.message = this.childComp.messageFromTheChild;
  }

  receiveMessageFromChild($event) {
    this.message = $event;
    console.log(this.message);
  }

}
