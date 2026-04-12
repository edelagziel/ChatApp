import { ChatList } from "./ChatList/ChatList"
import { Box } from "@mui/system";
import {SearchBar} from "../../components/SearchBar/SearchBar"
import {ButtonShow} from "./ChatList/ButtonShow.utils"
import { useState } from "react";
import {AddFriendModal} from "./Modal/AddFriendModal"
import{CreateGroupModal} from"./Modal/CreateGroupModal"
import {useChats} from "./hook/useChats"
import { useEffect } from "react";







export function ChatPage({pageName}:{pageName:string})
{
  const { Chats, SetChats } = useChats();
  const [isAddFriendOpen, setIsAddFriendOpen]=useState(false)
  const [isNewGroupOpen, setIsNewGroupOpen]=useState(false)
  const filteredChats= Chats.filter((chat)=>{
  if(pageName==="friends & Groups") return true;
  if(pageName==="Groups") return chat.isGroup
  if(pageName==="friends") return !chat.isGroup
   return true
  })

  useEffect(()=>{
    setIsAddFriendOpen(false)
  },[pageName])


  return(
    <>
    <Box mt={8} gap={8} sx={{display:"flex" ,flexDirection:"column",alignItems:"center"}}>
        <SearchBar/>
        <ChatList Chats={filteredChats}/>
       <ButtonShow pageName={pageName}  onOpenAddFriend={()=>setIsAddFriendOpen(true)} onCreateGroup={()=>setIsNewGroupOpen(true)}  />
    </Box>
    <AddFriendModal isOpen={isAddFriendOpen} SetChats={SetChats} onClose={()=>setIsAddFriendOpen(false)} ></AddFriendModal>
    <CreateGroupModal isOpen={isNewGroupOpen}  SetChats={SetChats} onClose={()=>setIsNewGroupOpen(false)}></CreateGroupModal>
    </>

  );
}