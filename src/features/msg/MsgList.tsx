import { Box } from "@mui/system";
import {MsgItem} from "./MsgItem"
import { type Messages} from "./type/msg.type"
import { useSelector } from "react-redux";



export function MsgList({Messages}:{Messages:Messages})
{
  const id =useSelector((state:any)=>state.auth.id)

  return(   
  <Box gap={3}  display={"flex"} flexDirection={"column"} sx={{height:"400px", overflowY:"auto", width:"60%",mx: "auto", pt:4}}>


      {
        Messages.map((item)=>{
          return item.senderId==id ? 
          (<MsgItem Itemcolor="primary.light" side="right" content={item.content} createdAt={item.createdAt} id={item.id} isVisible={item.isVisible} first_name={item.sender.first_name} last_name={item.sender.last_name} updatedAt={item.updatedAt}></MsgItem>)
          :
          ((<MsgItem Itemcolor="secondary.light" side="left" content={item.content} createdAt={item.createdAt} id={item.id} isVisible={item.isVisible} first_name={item.sender.first_name} last_name={item.sender.last_name} updatedAt={item.updatedAt}></MsgItem>)) 
        
        })
      }







  </Box>  
)
}