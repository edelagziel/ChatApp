import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';

export function ButtonShow()
{
  const location=useLocation().pathname;
  if(location==="/home")
   {
       return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button>add Friend</Button>
          <Button>Create Group</Button>
        </Box>
        );
   }
   if(location==="/Grope")
   {
    return(<Box gap={3} sx={{display:"flex",flexDirection:"row"}}>
          <Button>Create Group</Button>
        </Box>
        );
   }
   if(location==="/friends")
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