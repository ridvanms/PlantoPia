import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  show:Boolean = false

  toggleModal(){
    this.show = !this.show
  }
  hideModal(){
    this.show = false
  }
}
