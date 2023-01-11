import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  nome = "Componente child";

  lunghezzPene = 20;


  constructor() { }

  ngOnInit(): void {
  }

}
