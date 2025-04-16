import { Component } from '@angular/core';
import { RowComponent } from '../row/row.component';
import { MiddleComponent } from '../middle/middle.component';
import { ColComponent } from '../col/col.component';

@Component({
  selector: 'app-maincomp',
  imports: [RowComponent , MiddleComponent , ColComponent],
  templateUrl: './maincomp.component.html',
  styleUrl: './maincomp.component.css'
})
export class MaincompComponent {

}
