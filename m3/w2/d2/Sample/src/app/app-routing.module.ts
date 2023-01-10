import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActiveComponent } from './components/active/active.component';
import { InactiveComponent } from './components/inactive/inactive.component';
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
    path: '**',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
