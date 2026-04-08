import { ChatList } from "./ChatList/ChatList"
import { Box } from "@mui/system";
import {SearchBar} from "../../components/SearchBar/SearchBar"
import {ButtonShow} from "./ChatList/ButtonShow.utils"
import { useState } from "react";
import {AddFriendModal} from "./Modal/AddFriendModal"
import {useChats} from "./hook/useChats"







export function ChatPage({pageName}:{pageName:string})
{
  const {Chats}=useChats()
  const [isAddFriendOpen, setIsAddFriendOpen]=useState(false)
  const filteredChats= Chats.filter((chat)=>{
  if(pageName==="friends & Groups") return true;
  if(pageName==="Groups") return chat.isGroup
  if(pageName==="friends") return !chat.isGroup
   return true
  })



  return(
    <>
    <Box mt={8} gap={8} sx={{display:"flex" ,flexDirection:"column",alignItems:"center"}}>
        <SearchBar/>
        <ChatList Chats={filteredChats}/>
       <ButtonShow pageName={pageName}/>
    </Box>
    <AddFriendModal isOpen={isAddFriendOpen} onClose={()=>setIsAddFriendOpen(false)}></AddFriendModal>
    </>

  );
}