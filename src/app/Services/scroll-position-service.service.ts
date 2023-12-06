import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionServiceService {
  private scrollPosition: number = 0;
  private scrollHandler!: () => void;

  setScrollPosition(position: number): void {
    this.scrollPosition = position;
  }
  getScrollPosition(): number{
    return this.scrollPosition;
  }
  setScrollHandler(handler: () => void): void {
    this.scrollHandler = handler;
  }
  getScrollHandler(): () => void{
    return this.scrollHandler;
  }
}
