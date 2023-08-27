import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from "@angular/fire/compat/auth"

const routes:Routes =[
  {
    path:'account',
    canActivate:[AuthGuard],
    component:AccountComponent
  },
  {
    path:"login",
    //authGuard
    component :LoginComponent
  },
  {
    path:'register',
    //authGuard
    component:RegisterComponent
  }
]


@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  exports:[
    RouterModule,
    RegisterComponent,
    LoginComponent
  ]
})
export class AccountModule { }
