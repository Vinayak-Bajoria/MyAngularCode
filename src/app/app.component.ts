/* tslint:disable:no-trailing-whitespace */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client-Contacts-Manager-Angular';
  template: any;
  onewordttitle: any;
  ngOnInit() {
    console.log('My component is alive');
    this.template = 10 / 2;
  }

  displayChildResult($event: any) {
    alert('child component reacts for us now');
  }


  constructor() {}
}
