import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authSrv: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  register(f:NgForm) {
    console.log(f.value);
    this.authSrv.signup(f.value).subscribe(() => {this.router.navigate(['login'])});

}


}
