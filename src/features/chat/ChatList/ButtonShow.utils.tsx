import { Box } from "@mui/system";
import Button from '@mui/material/Button';

export function ButtonShow({pageName}:{pageName:string})
{
  if(pageName==="friends & Groups")
   {
       return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button>add Friend</Button>
          <Button>Create Group</Button>
        </Box>
        );
   }
   if(pageName==="Groups")
   {
    return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button>Create Group</Button>
        </Box>
        );
   }
   if(pageName==="friends")
   {
    return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button>add Friend</Button>
        </Box>
        );
   }
   else
   {
    return("");
   }
 
    

}