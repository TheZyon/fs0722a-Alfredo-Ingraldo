import { Component, OnInit,ViewChild } from '@angular/core'; /* attenzione abbiamo importato viewChild per usare la direttiva @viewChild */
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild(ChildComponent, { static: true }) child!: ChildComponent; //selettore ChildComponent 



  constructor() { }

  ngOnInit(): void {
  }

}
