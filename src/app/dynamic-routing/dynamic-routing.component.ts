import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing',
  imports: [RouterLink],
  templateUrl: './dynamic-routing.component.html',
  styleUrl: './dynamic-routing.component.css',
})
export class DynamicRoutingComponent {
  queryValue : string | null = "";
  name : string | null = "";
  id : string | null  = ""
  constructor(private router : ActivatedRoute){

  }
 
  ngOnInit(){
    this.router.params.subscribe((params)=> {
      this.name = params['name'];
      this.id = params['id'];
    })

  }
 
}
