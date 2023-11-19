import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(
    private snackModal:MatSnackBar
  ) { }
  

}
