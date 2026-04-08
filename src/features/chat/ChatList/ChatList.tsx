import Box from '@mui/material/Box';
import {ChatItem} from "../ChatItem/ChatItem"
import { useSelector } from "react-redux";
import {type Chat} from "../type/chat"

export function ChatList({Chats}:{Chats:Chat[]})
{
  const id =useSelector((state:any)=>state.auth.id)
  console.log(id);

  
  return(
      <Box gap={4} display={"flex"} flexDirection={"column"} sx={{height:"400px", overflowY:"auto", width:"80%"}}>
      {Chats.map((item) =>
        {
          const otherMember=item.chatMembers.find((member)=> member.userId!==id)
          return item.isGroup? <ChatItem id={item.id} chatName={item.groupName ?? "Group"} 
          msg={item?.messages?.[0]?.content ?? "dont have messages yet"} key={item.id}>
          </ChatItem>
          :<ChatItem id={item.id} chatName={`${otherMember?.user.first_name ?? ""} ${otherMember?.user.last_name ??""}`} 
          msg={item.messages?.[0]?.content ?? "dont have messages yet"} key={item.id}></ChatItem>
        })
      }
    </Box>
      
)
}