import { Component, OnInit,AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { ScrollPositionServiceService } from '../Services/scroll-position-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit,OnDestroy {
   @ViewChild('plant', { static: true }) plant!: ElementRef;
  @ViewChild('plant1', { static: true }) plant1!: ElementRef;
  @ViewChild('title', { static: true }) title!: ElementRef;
  species:any;

  constructor(
    private apiService: ApiServiceService,
    private scrollService:ScrollPositionServiceService
  ){}
  ngOnInit(): void {
    this.apiService.getAllSpecies().subscribe({
      next:(response)=>{
        this.species = response
      },
      error: (error) => {
        console.log(`Error: Could not load the data!`)
      }
    })
  }
  ngAfterViewInit(): void {
    const plant = this.plant?.nativeElement
    const plant1 = this.plant1?.nativeElement
    const title = this.title?.nativeElement

    const scrollHandler = () => {
      const value = window.scrollY;
      title.style.marginTop = value * 2.5  + "px";
      plant.style.marginTop = (value/3)  + "px";
      plant1.style.marginTop = (value/3) +"px";
      
    }
    window.addEventListener('scroll', scrollHandler);

    this.scrollService.setScrollHandler(scrollHandler);
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollService.getScrollHandler());
  }
  
}
