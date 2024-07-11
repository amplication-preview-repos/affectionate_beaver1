export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  recipient: string | null;
  sentAt: Date | null;
};
