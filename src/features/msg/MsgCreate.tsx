import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function MsgCreate()
{
  return (

    <Box display="flex" gap={2} justifyContent={"center"} sx={{p:2 , width: "60%",mx: "auto" }}  >
      <TextField fullWidth ></TextField>
      <Button>send</Button>
    </Box>

  )
}