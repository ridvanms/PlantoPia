import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup | any;

  constructor(
    private accountService:AccountService
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    if(this.loginForm.invalid)return alert('Invalid form')
    this.accountService.login(email,password)
  }
}
