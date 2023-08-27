import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import {Router} from "@angular/router"
import { CookieService } from 'ngx-cookie-service';
import { GlobalLoaderService } from '../core/global-loader/global-loader.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private cookie:CookieService,
    private global_loader:GlobalLoaderService
    ) { }

  
  login(email:string,password:string){
    this.global_loader.showLoader()
    this.fireAuth.signInWithEmailAndPassword(email,password).then(
      () => {
        this.global_loader.hideLoader()
        this.cookie.set('token',email.split('@')[0], 2)
        this.router.navigate(['/user/account'])
      },
      error=>{
        this.global_loader.hideLoader()
        alert(`Error ${error.message}`)
      })
  }

  register(email:string,password:string){
    this.global_loader.showLoader()
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(
      () => {
        this.global_loader.hideLoader()
        this.cookie.set('token',email.split('@')[0],2)
        this.router.navigate(['/user/account'])
      },
      (error)=>{
        this.global_loader.hideLoader()
        alert(`Error: ${error.message}`)
      }
    )
  }

}
