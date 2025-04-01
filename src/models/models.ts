export interface Recommendation {
  id: string;
  name: string;
  title: string;
  text: string;
  createdAt: string; // Change createdAt to string
}

export interface Notifications {
  notifId: string;
  userId: string;
  title: string;
  message: string;
  timestamp: string; // Change timestamp to string
  isRead: boolean;
}
