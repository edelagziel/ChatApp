export type Chat = {
  id: number;
  isGroup: boolean;
  groupName: string | null;
  chatMembers: {
    role: string;
    lastOpenAt: string | null;
    userId: number;
    chatId: number;
    user: {
      id: number;
      first_name: string;
      last_name: string;
    };
  }[];
  messages: {
    id: number;
    content: string;
    createdAt: string;
  }[];
};