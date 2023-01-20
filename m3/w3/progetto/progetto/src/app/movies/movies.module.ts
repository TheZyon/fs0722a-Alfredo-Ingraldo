import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MoviesComponent]
})
export class MoviesModule { }
