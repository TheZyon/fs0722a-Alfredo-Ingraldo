import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take, switchMap } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authSrv: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        //controlla con user$ se siamo loggati o meno.
        // se non siamo loggati manda avanti la richiesta (che sarà login o register)
        //altrimenti è una chiamata per avere accesso a dati e ci vuole il token


        return this.authSrv.user$.pipe(take(1), switchMap((user) => {
          if (!user) {
              return next.handle(request);
              //manda avanti la request, se la chiamata è riservata darà errore
          }
          const newReq = request.clone({
              headers: request.headers.set(
                  'Authorization',
                  `Bearer ${user.accessToken}`
              ),
          });
          console.log(newReq);
          return next.handle(newReq);
      }));
  }
}
