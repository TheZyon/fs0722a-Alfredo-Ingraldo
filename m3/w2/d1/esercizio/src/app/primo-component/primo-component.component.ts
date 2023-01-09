import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.scss']
})
export class PrimoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quickLick(): void {
    let lickAudio = new Audio("/assets/slurp_v.mp3");
    console.log("quickLick called");
    lickAudio.play();
  }
}
