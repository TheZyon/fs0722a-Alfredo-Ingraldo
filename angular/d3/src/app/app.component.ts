import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd3';


  users = [

    {
      nome: "mario",
      cognome: "rossi"
    },
    {
      nome: "mario",
      cognome: "bianchi"
    },
    {
      nome: "carlino",
      cognome: "pipino"
    }
  ]
}
