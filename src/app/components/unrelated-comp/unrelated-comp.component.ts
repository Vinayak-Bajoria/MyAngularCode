import { Component, OnInit } from '@angular/core';
import {DataMessageServiceService} from '../../services/data-message-service.service';

@Component({
  selector: 'app-unrelated-comp',
  templateUrl: './unrelated-comp.component.html',
  styleUrls: ['./unrelated-comp.component.css']
})
export class UnrelatedCompComponent implements OnInit {
  message: string;

  constructor(private dataMessageService: DataMessageServiceService) { }

  ngOnInit() {
    console.log(this.dataMessageService.getMessage());
  }

  newMessage() {
    this.dataMessageService.changeMessage('hello message changed');
  }
}
