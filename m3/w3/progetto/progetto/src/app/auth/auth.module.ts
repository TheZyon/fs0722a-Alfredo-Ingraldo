import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './token.interceptor';
@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ /* i providers sono funzionalità aggiuntive per le components, qui ad
                    esempio si dice di
                    •dare interceptors (provide: HTTP_INTERCEPTORS)
                    •usare la classe TokenInterceptor
                    •multi:true -> consente l'utilizzo di più interceptors */
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
  exports:[SignupComponent, LoginComponent]
})
export class AuthModule { }
