import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { PlantGuideComponent } from './plant-guide.component';
import { PlantAccessoriesComponent } from './plant-accessories/plant-accessories.component';

const routes:Routes = [
  {
    path:'',
    component:PlantGuideComponent
  },
  {
    path:'accessories',
    component:PlantAccessoriesComponent
  }
]


@NgModule({
  declarations: [ PlantAccessoriesComponent,PlantGuideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  exports:[
    RouterModule,
    PlantGuideComponent,
    PlantAccessoriesComponent
  ]
})
export class PlantGuideModule { }
