import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //info sull'utente loggato
  isLoggedIn:boolean=false;
  nomeUtente: string = 'CammeloPassalacqua';
  idUtente: number = -1;

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    })
    this.authSrv.user$.subscribe((user) => {
      if (user?.user.name) { this.nomeUtente = user?.user.name; }
      
    })
  }


  onLogout() {
    this.authSrv.logout();
}

}
