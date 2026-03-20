import {RegisterForm} from "./RegisterForm"
import Container from '@mui/material/Container';
import Tepogrhfty from '@mui/material/Typography'


export function Register ()
{
  return (
    <Container maxWidth="md" sx={{mt:10}} >
        <Tepogrhfty sx={{textAlign: "center"}} variant="h3">Register page</Tepogrhfty>
        <RegisterForm/>
    </Container>
  )
}