import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    { name: "Mariello", email: "mariello@gmail.com" },
    { name: "Carlino Div", email: "sofareisiticoidivcolorati@gmail.com" },
    { name: "Dario del Giudice", email: "darioGiudice@napoli.wa" }]
  usersClicked: boolean[]; //array che tiene traccia dell'ultimo user che è stato cliccato

  constructor() {
    this.usersClicked=new Array<boolean>(this.users.length);
  }

  ngOnInit(): void {
    this.initUserClicked(); //inizializzo tutte le entrate a false
    console.log("situa iniziale:", this.usersClicked)
  }

  initUserClicked(): void {
    for (let i = 0; i < this.users.length; i++) {
      this.usersClicked[i] = false;
    }
  }
  updateUserClicked(id: number) {
    console.log("called with", id);
    this.initUserClicked();
    this.usersClicked[id] = true; //rendo true l'user che è stato cliccato
    console.log("dopo l'update con il click", this.usersClicked);
  }

}
