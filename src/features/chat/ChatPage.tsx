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
  return(
    <>
    <Box gap={8} sx={{display:"flex" ,flexDirection:"column",alignItems:"center"}}>
        <h1>{`In this page you can see ${pageName}`}</h1>
        <SearchBar/>
        <ChatList Chats={Chats}/>
       <ButtonShow/>
    </Box>
    <AddFriendModal isOpen={isAddFriendOpen} onClose={()=>setIsAddFriendOpen(false)}></AddFriendModal>
    </>

  );
}