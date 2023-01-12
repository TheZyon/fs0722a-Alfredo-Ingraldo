import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActiveComponent } from './components/active/active.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { UsersComponent } from './components/users/users.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'carlinoAttivo',
    component: ActiveComponent
  },
  {
    path: 'carlinoPassivo',
    component: InactiveComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'post/:id/:body/:title/:type/:author',
    component: PostDetailComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
