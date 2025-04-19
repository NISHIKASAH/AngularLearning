import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MaincompComponent } from './maincomp/maincomp.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { LearningComponent } from './learning/learning.component';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink ,UsercomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
title :string | null = '' ;
// message : string = "";
// receiveMessage ($event : string){
//   this.message = $event;
//   console.log("i am from parent" , this.message);

// }
datafromChild : string = "";
parenFunction($event :string){
  this.datafromChild = $event;
  console.log('calling from parent component')
}
}
