import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaincompComponent } from './maincomp/maincomp.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { LearningComponent } from './learning/learning.component';


@Component({
  selector: 'app-root',
  imports: [MaincompComponent , CounterAppComponent,LearningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  arr  : string[] = ["red" , "blue" , "yellow" , "green" ]
  name = ""; 
  displayName ="";
  value = 'red';
  students= [{
    name : "nishika" , age : "23"
  , },{
    name : "trisa" , age : "29"
  } , {
    name : "samukta" , age : "24"
  }];
  count :WritableSignal<number| string > = signal<number | string>(10);  //use to make dynamic properties
  signalData = signal(12);  //use to make dynamic properties  
  numbericSignal = signal(23);
  computedData = computed(()=>this.signalData() + 20 ); 
  computedvalue = computed(()=>this.numbericSignal()+2)
  //computed signal is readOnly signal ,automatically recalculate whenever 
  //its dependent signal change .


  getInput(event : Event){
    this.name =  (event.target as HTMLInputElement ).value ;
    console.log(this.displayName)
  }
  showInput(){
    this.displayName = this.name;
  }
  setInput(value : string){
    this.name = value;
  }
  handleColor(){
    this.arr.forEach((x,i)=> {
      console.log(i ,x)
      return this.value = x;
    });
  }
  getName(value : string){
    console.log(value);
  }
  handleValue(){
    this.count.set("hello") //valu set for properties
    this.numbericSignal.set(50);
    this.signalData.update((val)=> val +1); //update use to keep updating value . 
    //it can have only 1 type.

  } 
}
