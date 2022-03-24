import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const childRoutes:Routes=[
  {path:"auth", component:AuthComponent, children:[
    {path:"login", component:LoginComponent}, {
      path:"signup",component:SignupComponent
    }
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(childRoutes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
