import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselLikesComponent } from './carousel-likes/carousel-likes.component';

import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';



const routes: Routes = [
  {
    path: '',
    component: CarouselLikesComponent
  }
]

@NgModule({
  declarations: [
    CarouselLikesComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CarouselLikesModule { }
