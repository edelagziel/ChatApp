import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import { loginToServer } from './login';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from "../authSlice"
import { useNavigate } from 'react-router-dom';

export function LoginForm ()
{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
const dispatch = useDispatch();
const navigate = useNavigate();


async function handleLogin() 
{
 if (!email || !password) {
  setError("Please fill all fields");
  return;
}
  try{
    setError('');
    const response= await loginToServer(email, password)
    dispatch(login({ token: email, isAutanticated: true,id:response.data?.Id}))
    navigate("/home")
  }
  catch(err:any)
  {
    setError(err.response?.data?.message || 'Something went wrong');
  }
} 

  return (
  <Box p={10} sx={{display: "flex", flexDirection: "column", gap:4}} >
    <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} required fullWidth label="Username" maxRows={2} placeholder="user name example : edenlag@gmail.com"></TextField>
    <TextField type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required fullWidth label="password" maxRows={2} placeholder="Enter youre Password "></TextField>
    <Button fullWidth={false} size='large' onClick={handleLogin}>login</Button>
    {error && <Alert severity="error">{error}</Alert>}</Box>
  )
}