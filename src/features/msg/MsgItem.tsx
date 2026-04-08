import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export function MsgItem({Itemcolor,side,content,createdAt,id,isVisible,first_name,last_name,updatedAt}:{updatedAt:string,last_name:string,first_name:string,isVisible:boolean,id:number,createdAt:string ,content:string,Itemcolor:string,side: "left" | "right";})
{
    return(
      
    <Box display="flex" alignItems={"center"} justifyContent={side==="left"? "flex-start" : "flex-end"} gap={2} sx={{width:"80%"}}>
        <Box bgcolor={Itemcolor} px={2} py={1} borderRadius={2} maxWidth={"60%"} sx={{wordBreak:"break-word"}}>
            {side==="left" && <Typography variant="caption" fontWeight="bold" >{first_name} {last_name}</Typography>}
            <Typography variant="body1"> {content}</Typography> 
            <Typography variant="caption" display="block" textAlign="right" sx={{ opacity: 0.6 }} >
                {new Date(createdAt).toLocaleTimeString([], 
                {
                    hour: "2-digit",
                    minute: "2-digit",
                })} 
            </Typography>
        </Box>    
    </Box>
    )
}
