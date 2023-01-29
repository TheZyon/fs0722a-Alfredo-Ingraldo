import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => { return import('src/app/auth/auth.module').then(m => m.AuthModule); }
  },
  {
    path: 'posts',
    loadChildren: () => { return import('src/app/LoggedFeatures/posts/posts.module').then(m => m.PostsModule); },
    canActivate: [AuthGuard]

  },
  {
    path: 'likes',
    loadChildren: () => { return import('src/app/LoggedFeatures/carousel-likes/carousel-likes.module').then(m => m.CarouselLikesModule); },
    canActivate:[AuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => { return import('src/app/LoggedFeatures/notifications/notifications.module').then(m => m.NotificationsModule); },
    canActivate:[AuthGuard]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
