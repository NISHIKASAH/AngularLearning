import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learning',
  imports: [FormsModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  data = "hey its me!";
  value = signal(20);
  computedValue = computed(()=>this.value() + 20);
  IncrementValue(){
    this.value.update((prev)=> prev+10);
    // this.computedValue.set(20);
  }
  constructor(){
    effect(()=>{
     setInterval(()=>{
      console.log(" i am called",this.value());
     },2000)
    })
  }
  students : string[] = [];
  // students : string[] = ["abc" , "def", "efuch" , "hcxc" , "dchc"];


}
