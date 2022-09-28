import { Injectable } from '@angular/core';

@Injectable()
export class DataMessageServiceService {
  private message: string;
  constructor() { }
  changeMessage(newMessage: string){
    this.message = newMessage;
  }
  getMessage(): string{
    return this.message;
  }
}
