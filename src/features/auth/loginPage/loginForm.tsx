import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function LoginForm ()
{
  return (
  <Box p={10} sx={{display: "flex", flexDirection: "column", gap:4}} >
    <TextField required fullWidth label="Username" maxRows={2} placeholder="user name example : edenlag@gmail.com"></TextField>
    <TextField required fullWidth label="password" maxRows={2} placeholder="Enter youre Password "></TextField>
    <Button fullWidth={false} size='large'>login</Button>
  </Box>
  )
}