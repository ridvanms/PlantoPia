import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  name:string = ''
  isLoggedIn:Boolean = false

  constructor(
    private authService:AuthService,
    private cookie:CookieService,
    private router:Router
    ){
      this.name = this.cookie.get('token')
  }

  ngOnInit(): void {
    this.isLoggedIn=this.authService.isAuth()
  }
  onLogOut(){
    this.cookie.delete('token')
    this.router.navigate(['/'])
  }
}
