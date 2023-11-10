import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeComponent,
    PlantDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports:[
    HomeComponent,
    PlantDetailComponent
  ]
})
export class HomeModule { }
