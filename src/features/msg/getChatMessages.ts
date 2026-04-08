import axios from "axios"


export async function getChatMessages(chatId:number)
{
  const respone=await axios.get(`http://localhost:3000/api/chats/msg/${chatId}`)
  return respone.data;
}