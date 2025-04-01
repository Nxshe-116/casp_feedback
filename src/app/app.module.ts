import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environment/environment';
import { AppComponent } from './app.component';
import { ModalComponent } from '../modal/modal/modal.component';

@NgModule({
  declarations: [
   
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule, AppComponent, ModalComponent
  ],
  providers: [],
  bootstrap: [ ]
})
export class AppModule { }