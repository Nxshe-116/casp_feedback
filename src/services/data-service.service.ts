import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, setDoc, doc } from '@angular/fire/firestore';
import { Notifications, Recommendation } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DataServiceService {
  constructor(private firestore: Firestore) {} // Inject Modular Firestore

  async addNotification(notif: Notifications) {
 
    const notificationRef = doc(this.firestore, 'notifications', notif.notifId);
    await setDoc(notificationRef, notif);
    
  }

  async addFeedback(feedback: Recommendation) {
     // Your custom ID format
    const feedbackRef = doc(this.firestore, 'recommendations', feedback.id);
    await setDoc(feedbackRef, feedback);
   
  }
}