import { Box } from "@mui/system";
import { Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
 

export function ChatItem({chatName,msg,id}:{chatName:string,msg:string,id:number})
{
  const navigate=useNavigate();
    return(
      <Box component={Button} onClick={()=>navigate(`/chat/${id}?chatName=${encodeURIComponent(chatName)}`)}  padding={2} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} bgcolor="#90ed8c32" color="text.primary"  textTransform="none" borderRadius={2} fullWidth>
        <Typography variant="h6" fontWeight={600}>{chatName}</Typography>
        <Typography variant="body2" color="text.secondary">{msg}</Typography>
      </Box>
    )
}
