import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addFriend } from "../chat.service";
import { useSelector } from "react-redux";

type AddFriendModalProps = {
  isOpen: boolean;
  onClose: () => void;
  SetChats: React.Dispatch<React.SetStateAction<any[]>>
};

export function AddFriendModal({ isOpen, onClose,SetChats }: AddFriendModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const userId = useSelector((state: any) => state.auth.id);

  async function handleAddFriend() {
    if (!email) {
      setError("Please fill the field");
      return;
    }
    try {
      setError('');
      setLoading(true);
      const response = await addFriend(email, userId);
      console.log(response);
      SetChats((prev) => [...prev, response.data]);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setEmail('');
        setSuccess(false);
        setError('');
      }, 1500);

    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Friend</DialogTitle>

      <DialogContent>
        <Typography>Add a new friend by typing the email below</Typography>
        <TextField sx={{ mt: 2 }} value={email}
          onChange={(e) => setEmail(e.target.value)} required fullWidth type='email' label="Email" placeholder="example: edenlag@gmail.com" disabled={loading}/>
        </DialogContent>

      <DialogActions>
        <Button onClick={handleAddFriend} disabled={loading}>{loading ? "Adding..." : "Add Friend"}</Button>
        <Button onClick={onClose} disabled={loading}>Close</Button>
        {error && (<Typography color="error" sx={{ fontSize: 14 }}>{error}</Typography>)}
        {success && (<Typography sx={{ color: "green", fontSize: 16 }}>Friend added successfully </Typography>)}
      </DialogActions>
    </Dialog>
  );
}