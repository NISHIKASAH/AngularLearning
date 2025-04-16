import { Component, effect } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})

export class CounterAppComponent {
  value = 0; 
  
  handleIncrement() {
    if(this.value === 10){
      return;
    }
    else this.value++;
  }
  handleDecrement(){
    if(this.value === 0){
      return;
    }
    else this.value--;
  }
  handleButton(val : string){
    if(val === 'minus'){
      this.handleDecrement();
    }
    else this.handleIncrement();
  }
}
