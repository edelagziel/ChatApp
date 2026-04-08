export type Sender = {
  id: number;
  first_name: string;
  last_name: string;
};

export type Message = {
  id: number;
  content: string;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
  senderId: number;
  chatId: number;
  sender: Sender;
};

export type Messages = Message[];