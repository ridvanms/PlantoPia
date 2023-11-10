import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  species:any;

  constructor(
    private apiService:ApiServiceService
  ){}
  ngOnInit(): void {
    this.apiService.getAllSpecies().subscribe({
      next:(response)=>{
        this.species = response
      },
      error:(error)=>{alert(error.message)}
    })
  }
  
}
