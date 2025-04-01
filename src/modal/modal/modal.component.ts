import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataServiceService } from '../../services/data-service.service';
import { Notifications, Recommendation } from '../../models/models';
import { MatSnackBar } from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true, // Add this if using standalone components
  imports: [ReactiveFormsModule] // Explicitly import
})
export class ModalComponent {
  recommendationForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalComponent>,
    private dataService: DataServiceService,
    private snackBar: MatSnackBar
  ) {
    this.recommendationForm = this.fb.group({
      name: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  close() {
    this.dialogRef.close();
  }

  async onSubmit() {
    if (this.recommendationForm.valid) {
      const recommendationData: Recommendation = {
        ...this.recommendationForm.value,
        id: `recom_${Date.now()}`,
        createdAt: new Date()
      };

      const notificationData: Notifications = {
        notifId: `notif_${Date.now()}`,
        userId: 'admin',
        title: 'New Recommendation Added',
        message: `New recommendation from ${this.recommendationForm.value.name}`,
        timestamp: new Date(),
        isRead: false
      };

      try {
        await this.dataService.addFeedback(recommendationData).then(()=>{

           this.dataService.addNotification(notificationData).then(() => {
            // Show success message
            this.snackBar.open('Feedback submitted successfully!', 'Close', {
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary'],  
            });
          })
          .catch((error: any) => {
            // Show error message if notification fails
            console.error("Error adding notification:", error);
            this.snackBar.open('Error submitting feedback.', 'Close', {
              duration: 3000,
              panelClass: ['error-snackbar']
            });
          });
      });
        // await this.dataService.addNotification(notificationData);
        this.dialogRef.close();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }
}