import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglerService {

  constructor() { }
  toggleMobileNav: boolean = false;
  mobileToggler() {
    return this.toggleMobileNav = !this.toggleMobileNav
  }
}
