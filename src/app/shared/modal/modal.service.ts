import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  show:Boolean = false
  constructor(
    
  ){}
  toggleModal(){
    this.show = !this.show
  }
  hideModal(){
    this.show = false
  }
 
}
