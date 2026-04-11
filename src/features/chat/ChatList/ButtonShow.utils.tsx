import { Box } from "@mui/system";
import Button from '@mui/material/Button';

export function ButtonShow({pageName,onOpenAddFriend,onCreateGroup}:{pageName:string,onOpenAddFriend:()=>void,onCreateGroup:()=>void})
{
  if(pageName==="friends & Groups")
   {
       return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button onClick={onOpenAddFriend}>add Friend</Button>
          <Button onClick={onCreateGroup}>Create Group</Button>
        </Box>
        );
   }
   if(pageName==="Groups")
   {
    return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button onClick={onCreateGroup}>Create Group</Button>
        </Box>
        );
   }
   if(pageName==="friends")
   {
    return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button onClick={onOpenAddFriend} >add Friend</Button>
        </Box>
        );
   }
   else
   {
    return("");
   }
 
    

}