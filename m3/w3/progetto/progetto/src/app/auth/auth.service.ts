import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface LoginData {
  email: string,
  password:string
}


export interface SignupData {
  name: string,
  email: string,
  password: string
}

export interface AuthData {
  accessToken: string,
  user: {
      email: string,
      id: number,
      name: string
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService(); //usato per lavorare con un jwt (es.: ottenerne l'expiration date)
  URL = 'http://localhost:4201';
  private authSubject = new BehaviorSubject<null | AuthData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user));


  autoLogoutTimer: any; //conterrà il setTimeout per fare l'autoLogout

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser()
  }


  login(data: LoginData): Observable<AuthData> { //l'azione di loggarsi e le sue conseguenze
    console.log("logging...", data)
    return this.http.post<AuthData>(`${this.URL}/login`, data).pipe(tap((authData) => { //cosa ci fai con gli AuthData ottenuti dalla request?
        this.authSubject.next(authData); //li nexto dal authSubject -> isLoggedIn$ nexta true
        localStorage.setItem('user', JSON.stringify(authData)); //li metto nel local storage come 'user'

        const expirationDate = this.jwtHelper.getTokenExpirationDate(authData.accessToken) as Date; //ottengo la data di fine validità del token usando il jwtHelper (ATTENZIONE al casting as Date)
        this.autoLogout(expirationDate);  //attivo l'autoLogout per l'expiration date del token
    }),  catchError(this.errors)
    );
/* QUINDI, una volta ottenuto gli authData dalla richiesta http.post, faccio:
1. li nexto nel authSubject ---> ho il IsLoggedIn$ nexta true
2. li salvo nel local storage con chiave 'user'
3. inizializzo l'autoLogout  */



  }

  restoreUser() {
    const userJson = localStorage.getItem('user'); //proviamo a recuperare gli authData del User
    if (!userJson) { //caso se se userJson è null (in generale !null da true)
        return;
    }
    const user: AuthData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) { //caso se il token è scaduto
        return;
    }
    //qui siamo nel caso in cui i dati ci sono e il token non è scaduto
    this.authSubject.next(user); //streammo gli authData nel authSubject -> così isLoggedIn$ nexta true
    const expirationDate = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;
    this.autoLogout(expirationDate);


    /* QUINDI:
    1. evrifico se 'user' è nel local storage, lo parso, e verifico se il token non è scaduto
    se le due condizioni sono superate, allora:
    2. streammo le credenziali dal authSubject
    3. aggiorno l'autoLogout
    */
  }

  signup(data: SignupData) { //registrazione
    return this.http.post(`${this.URL}/register`, data).pipe(catchError(this.errors));
  }

  logout() {
    this.authSubject.next(null); //1. adesso isLoggedIn$ streamma false
    this.router.navigate(['/login']); //2. reindirizzo al login
    localStorage.removeItem('user');
    if (this.autoLogoutTimer) {//3. togli l'auto logout
        clearTimeout(this.autoLogoutTimer);
    }
    //QUINDI: speculare al login nei tre punti
  }

  autoLogout(expirationDate: Date) {
    const expMs = expirationDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() => {
        this.logout();
    }, expMs);
  }

  private errors(err: any) {
  switch (err.error) {
      case "Email and password are required":
          return throwError('Email e password sono obbligatorie');
          break;
      case "Email already exists":
          return throwError('Utente già registrato');
          break;
      case "Email format is invalid":
          return throwError('Email scritta male');
          break;
      case "Cannot find user":
          return throwError('L\'utente non esiste');
          break;
      default:
          return throwError('Errore nella chiamata');
          break
  }
  }

}
