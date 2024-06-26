import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenicationRoutingModule } from './authenication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenicationRoutingModule
  ]
})
export class AuthenicationModule { }
