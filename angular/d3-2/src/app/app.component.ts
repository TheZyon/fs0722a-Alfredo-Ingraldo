import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { User } from './interface/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd3-2';

  users: User[] = [];

  onAddMan(user: User) {
    this.users.push(user);
  }

  onAddWoman(user: User) {
    this.users.push(user);
  }
}
