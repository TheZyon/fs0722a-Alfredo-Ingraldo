import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs';



export interface User {
  email: string,
  name: string,
  id: number,
  password:string
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  url = 'http://localhost:4201';


  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<User[]>(this.url + '/users').pipe(catchError(err => { console.log("error get users"); throw err; }))
  }
}
