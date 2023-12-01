import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
   @ViewChild('plant', { static: true }) plant!: ElementRef;
  @ViewChild('plant1', { static: true }) plant1!: ElementRef;
  @ViewChild('title', { static: true }) title!: ElementRef;
  species:any;

  constructor(
    private apiService:ApiServiceService
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

    window.addEventListener('scroll', () => {
      const value = window.scrollY;
      title.style.marginTop = value  + "px";
      plant.style.marginLeft = value  + "px";
      plant1.style.marginLeft = -(value ) + "px";
      
    })
  }
  
}
