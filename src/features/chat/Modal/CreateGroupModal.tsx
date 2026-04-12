import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createGroup } from "../chat.service";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box'

type CreateGroupModalProps=
{
  isOpen:boolean
  onClose: () => void;

}




export function CreateGroupModal({isOpen,onClose}:CreateGroupModalProps)
{
  const [emails, setEmails] = useState<string[]>(['']);
  const [GroupName,setGroupName]=useState('');
  const [errors,setError]=useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const userId = useSelector((state:any)=>state.auth.id);


async function handleGroup() {
  if (!GroupName || emails.some(e => !e)) {
    setError("Please fill all fields");
    return;
  }


  try {
    setError('');
    setLoading(true);
    const response = await createGroup(GroupName, emails, userId);

    console.log(response);

    setSuccess(true)
  setTimeout(() => 
  {
    onClose();
    setEmails(['']);
    setGroupName('');
    setError('');
    setSuccess(false);
  }, 2000);  
   


  } catch (err: any) {
    setError(err.response?.data?.message || 'Something went wrong');
  }
  finally {
    setLoading(false);
  }
}



  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>Create new Group</DialogTitle>
    <DialogContent >
      <Typography>enter a group name</Typography>
      <TextField sx={{mt:2}} value={GroupName} onChange={(e)=>{setGroupName(e.target.value)}} required fullWidth  label="Group name"  placeholder="all My Friend Group"></TextField>
      {emails.map((email,index)=>
      <div key={index}>
        <TextField sx={{mt:2}}  value={email} onChange={(e)=> {
          const newEmails=[...emails];
          newEmails[index]=e.target.value;
          setEmails(newEmails);
        }} 
        required fullWidth type='email' label="Email"  placeholder="user name example : edenlag@gmail.com">
        </TextField> 
        <Button size='large' onClick={()=>{
          const newEmails=emails.filter((_,i)=>i!==index)
          setEmails(newEmails)
        }}>- Remove</Button>
        </div>
        )}

    </DialogContent>

    <DialogActions>
        <Button size='large' onClick={()=>setEmails([...emails,''])}>+ Add Email</Button>
        <Button size='large' onClick={handleGroup} disabled={loading}>{loading ? "Creating..." : "Create Group"}</Button>
        <Button size='large' onClick={onClose}>Close</Button>
        {errors && (<Box sx={{ color: "red", fontSize: 14 }}> {errors}</Box>)}       
       {success && (<Box sx={{ color: "green", fontSize: 18, textAlign: "center"}}> {"user hs bean created"}</Box>)}
    </DialogActions>
    </Dialog>
  )
}