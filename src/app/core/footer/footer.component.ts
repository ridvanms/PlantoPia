import { Component, HostListener, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isShown:Boolean = !this.isBrowserSizeSmall()

  arrowColor:string = 'grey'

  customerService:Boolean = false
  resources:Boolean = false
  mySill:Boolean = false
  explore:Boolean = false

  myForm: FormGroup;

  constructor(
    private snackModal:MatSnackBar
  ) {
    this.myForm = new FormGroup({
      email: new FormControl("",[Validators.required, Validators.email])
    })
  }

  ngOnInit(): void {
    this.myForm.value.email = '';
  }
  onSubmit() {
    let emailIsEmpty = this.myForm.value.email == ""?true:false
    if (emailIsEmpty) return
    
    if (this.myForm.valid) {
      this.snackModal.open("Successfully submitted!",
        "✅",
        { duration: 1500},
        );
      
    } else {
      this.snackModal.open("Email is not correct!","❌",{duration:1500});
      
    }
    this.myForm.value.email = '';
    this.myForm.reset();
  }

  show(){
    return false
  }


  toggle(name:String){
    switch(name){
      case "customerService":
        this.customerService = !this.customerService;
        break;
      case 'resources':
        this.resources = !this.resources
        break;
      case "mySill":
        this.mySill=!this.mySill ;
        break;
      case "explore":
        this.explore = !this.explore;
        break;
    }
  }

  isBrowserSizeSmall():Boolean {
    return window.innerWidth <= 1030;
  }

  @HostListener("window:resize",['$event'])
  onResize():void{
    this.isBrowserSizeSmall();
  }
  
}
