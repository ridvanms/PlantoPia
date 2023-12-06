import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,AfterViewInit,OnDestroy {
  constructor() {
    // 
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
    // 
  }
  ngOnDestroy(): void {
      // 
  }
}
