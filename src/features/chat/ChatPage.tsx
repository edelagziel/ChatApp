import { ChatList } from "./ChatList/ChatList"
import { Box } from "@mui/system";
import {SearchBar} from "../../components/SearchBar/SearchBar"
import {ButtonShow} from "./ChatList/ButtonShow.utils"
export function ChatPage({pageName}:{pageName:string})
{
  return(
    <>
    <Box gap={8} sx={{display:"flex" ,flexDirection:"column",alignItems:"center"}}>
        <h1>{`In this page you can see ${pageName}`}</h1>
        <SearchBar/>
        <ChatList/>
       <ButtonShow/>
    </Box>
    </>

  );
}