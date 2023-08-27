import { Component, HostListener, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal/modal.service';
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

  email:string = ''
  constructor(
    private modalService:ModalService
  ){}

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    if(form.valid){
      this.email = form.value.email
      // console.log(form.value.email) //printing the email of the form
      // alert('You subscribed successfully')
      this.modalService.toggleModal()
      setTimeout(()=>{
        this.modalService.toggleModal()
      },1200)
     
    }
    form.reset();
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
