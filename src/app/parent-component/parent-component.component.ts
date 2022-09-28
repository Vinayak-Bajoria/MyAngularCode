import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildOneComponent} from '../child-one/child-one.component';
import {DataMessageServiceService} from '../services/data-message-service.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  parentMessage = 'Clean your rooom';
  messageFromChildToParent: string;
  parentMessage2: string;
  // @ts-ignore
  @ViewChild(ChildOneComponent) childOneComponent;
  message: string;

  constructor(private dataMessageService: DataMessageServiceService) { }

  ngOnInit() {
    this.message = this.dataMessageService.getMessage();
    console.log('message from the service =', this.message);
    this.parentMessage2 = 'this is second try message from parent flowing to second child';
  }

  ngAfterViewInit() {
    this.messageFromChildToParent = this.childOneComponent.message;
  }


  changeMessage() {
    this.message = this.dataMessageService.getMessage();
    console.log('message from the service =', this.message);
  }
}
