import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { CuboBelloComponent } from './cubo-bello/cubo-bello.component';
import { PrimaComponent } from './cartellaComponenti18/prima/prima.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    CuboBelloComponent,
    PrimaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
