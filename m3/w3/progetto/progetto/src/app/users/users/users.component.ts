import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users: User[] = [];

  constructor(private userSrv:UsersService) { }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(res => { return this.users = res; })
  }



}
