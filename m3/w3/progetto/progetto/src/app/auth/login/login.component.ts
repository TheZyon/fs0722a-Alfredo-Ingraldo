import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    this.authSrv.login(f.value).subscribe(resp => {this.router.navigate(['movies'])}) //aggiungere reindirizzamento

  }
}
