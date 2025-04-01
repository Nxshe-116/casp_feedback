export interface Recommendation {
  id: string;
  name: string;
  title: string;
  text: string;
  createdAt: string; 
}

export interface Notifications {
  notifId: string;
  userId: string;
  title: string;
  message: string;
  timestamp: string;  
  isRead: boolean;
}
