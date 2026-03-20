import { TextField,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from "@mui/material";

export function SearchBar()
{
  return(
    <Box sx={{width:"100%", display:"flex", flexDirection:"column",alignItems:"center"}}>
      <TextField size="small"  color="secondary"
       placeholder="search in your chat history" sx={{width:"90%"} }  
       slotProps={{input: {startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),},}} >
       </TextField>
  </Box>
  );
}


        
