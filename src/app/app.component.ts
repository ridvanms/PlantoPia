import { Component, ElementRef, OnInit } from '@angular/core';
import { GlobalLoaderService } from './core/global-loader/global-loader.service';
import { NavigationEnd, Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public global_loader: GlobalLoaderService,
    private router: Router,
    private el:ElementRef,
  ){}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        }
      })
  }
}
