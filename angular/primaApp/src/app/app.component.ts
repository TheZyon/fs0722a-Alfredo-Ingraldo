import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // il nome del tag in index.html in cui viene messo il componente html
  templateUrl: './app.component.html', //il percorso per il component html da inserire
  styleUrls: ['./app.component.scss'] //il percorso per il scss della component
})
export class AppComponent {
  title = 'Mariello';
}
