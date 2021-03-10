import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RegistrationComponentComponent } from '../registration-component/registration-component.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
