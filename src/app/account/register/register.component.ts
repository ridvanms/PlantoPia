import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private accountService:AccountService
  ){}

  registerForm:FormGroup  | any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    const email = this.registerForm?.value.email
    const password = this.registerForm?.value.password;
    if(this.registerForm.invalid)return alert('Invalid form')
    this.accountService.register(email,password);
  }
}
