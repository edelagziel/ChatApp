import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {LoginForm} from "./loginForm"

export function LoginPage()
{
  return(
    <Container  maxWidth ="md" sx={{mt:10}} >
    <Typography variant='h3' sx={{textAlign:'center'}}>login page</Typography>
    <LoginForm></LoginForm>
    </Container>

  );
}