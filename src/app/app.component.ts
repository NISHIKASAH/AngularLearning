import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MaincompComponent } from './maincomp/maincomp.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { LearningComponent } from './learning/learning.component';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 
}
