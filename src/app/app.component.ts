import { Component} from '@angular/core';


// import { CommonModule } from '@angular/common';

import {ModalComponent} from '../modal/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  // imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C.A.S.P Feedback';
  isPopupOpened: boolean = false;


  constructor(private dialog: MatDialog) { }





  openModal() {
    this.isPopupOpened = true;
    this.dialog.open(ModalComponent, {
      width: '900px',
      data: {}
    });

  }
}
