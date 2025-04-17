import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicRoutingComponent } from '../dynamic-routing/dynamic-routing.component';

@Component({
  selector: 'app-about',
  imports: [DynamicRoutingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  routerVal : string | null  = "";
  constructor( private route : ActivatedRoute){
  }
  ngOnInit(){
    // this.routerVal = this.route.snapshot.paramMap.get('name')
    // console.log("router" , this.routerVal)

   this.route.queryParams.subscribe(params => 
      this.routerVal = params['name']
    )
    
  }
}
