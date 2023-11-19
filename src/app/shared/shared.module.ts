import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule  } from "@angular/material/input"


@NgModule({
  declarations: [
    SpinnerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    SpinnerComponent,
    ModalComponent
  ]
})
export class SharedModule { }
