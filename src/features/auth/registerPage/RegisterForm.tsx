import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


export function RegisterForm()
{
  return(<Box p={10} sx={{display:"flex",flexDirection:"column",gap:4}}> 
  
  <TextField required fullWidth label="first name" placeholder='name examle : eden' ></TextField>
  <TextField required fullWidth label="last name" placeholder='last name examle : lagziel ' ></TextField>
  <TextField required fullWidth label="email" placeholder='email examle : eden@gmail.com ' ></TextField>
  <TextField required fullWidth label="paswword"></TextField>
  <TextField required fullWidth label="re enter password" ></TextField>
  <Button  fullWidth>Register</Button>
  </Box>



)}