import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  students: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'peter',
    },
    {
      id: 2,
      name: 'john',
    },
    {
      id: 3,
      name: 'sam',
    },
    {
      id: 4,
      name: 'lucy',
    },
  ];

  constructor( private router : Router){}
  handleNavigate(){
    this.router.navigate(['/about'] , {queryParams : {name :'nishika sah'}})
  }

}
