export interface Recommendation {
  id: string;
  name: string;
  title: string;

  text: string;
}




export interface Notifications {
  notifId: string;
  userId: string;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}
