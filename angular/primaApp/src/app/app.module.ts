import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentePrimaComponent } from './components/componente-prima/componente-prima.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePrimaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
