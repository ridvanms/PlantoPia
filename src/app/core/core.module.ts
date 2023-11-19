import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import{FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    GlobalLoaderComponent,
    NavigationComponent,
    FooterComponent
  ]
})
export class CoreModule { }
