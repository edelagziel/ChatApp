import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


type AddFriendModalProps=
{
  isOpen:boolean
  onClose: () => void;

}




export function AddFriendModal({isOpen,onClose}:AddFriendModalProps)
{
  const [email,setEmail]=useState('');
  const [error,setError]=useState("");

async function handleLogin() 
{
 if (!email ) {
  setError("Please fill the fields");
  return;
}
  try{
    setError('');
    // const response= await ServerReqwest(email)
  }
  catch(err:any)
  {
    setError(err.response?.data?.message || 'Something went wrong');
  }
} 



  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>Add Friend</DialogTitle>
    <DialogContent>
      <Typography>add a new friend by typing the email below</Typography>
      <TextField sx={{mt:2}} value={email} onChange={(e)=>{setEmail(e.target.value)}} required fullWidth type='email' label="Email"  placeholder="user name example : edenlag@gmail.com"></TextField>
    </DialogContent>

    <DialogActions>
        <Button size='large'>Add Friend</Button>
        <Button  size='large' onClick={onClose}>Close</Button>
    </DialogActions>
    </Dialog>
  )
}