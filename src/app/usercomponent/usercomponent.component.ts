import { Component,  EventEmitter,   Input, Output } from '@angular/core';

@Component({
  selector: 'app-usercomponent',
  imports: [],
  templateUrl: './usercomponent.component.html',
  styleUrl: './usercomponent.component.css'
})
export class UsercomponentComponent {
  @Input()  user : string = '';
  @Input() data : string = '' ;
  // @Output() messageEvent = new EventEmitter<string>();
  // messagePassed(){
  //   this.messageEvent.emit('message from child component!');
  // }
  @Output() childMessage = new EventEmitter<string>();
  childFunction(){
    this.childMessage.emit('hey this is me from child component!')
  }

}
