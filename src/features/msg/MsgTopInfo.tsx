import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';


export function MsgTopInfo({chatName}:{chatName:string})
{
  return(
  <Box  display="flex" justifyContent="center" textAlign="center" sx={{bgcolor:"#f5f5f5" ,height: "120px" }}>
    <Typography sx={{pt:3}} lineHeight={1} variant='h3'>{chatName}</Typography>
  </Box>
  )
}