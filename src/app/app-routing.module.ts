import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './view/guess/landing/landing.component';
import { ContactComponent } from './view/guess/contact/contact.component';
import { AboutComponent } from './view/guess/about/about.component';

const routes: Routes = [
  {
    path : "Landing",
    component : LandingComponent
  },
  {
    path : "Contact",
    component : ContactComponent
  },
  {
    path : "About",
    component : AboutComponent
  },
  {
    path : "",
    redirectTo : "Landing",
    pathMatch  : 'full'
  },
  {
    path : "v1",
    loadChildren : ()=> import('./modules/auth.module').then(m =>m.AuthModule)
  },
  {
    path : 'dashboard',
    loadChildren  : ()=> import('./modules/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : "Shop",
    loadChildren : ()=> import('./modules/shopping.module').then(m => m.ShoppingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
