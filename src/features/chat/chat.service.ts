import axios from "axios";

export async function createGroup(groupName: string, emails: string[], userId: number) {
  const response = await axios.post("http://localhost:3000/api/chats", {
    isGroup: true,
    groupName,
    emails,
    userId,
  });

  return response.data;
}

export async function addFriend(email: string, userId: number) {
  const response = await axios.post("http://localhost:3000/api/chats", {
    isGroup: false,
    emails: [email],
    userId,
  });

  return response.data;
}