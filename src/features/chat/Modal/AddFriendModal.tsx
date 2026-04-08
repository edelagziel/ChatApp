type AddFriendModalProps=
{
  isOpen:boolean
  onClose: () => void;

}


export function AddFriendModal({isOpen,onClose}:AddFriendModalProps)
{
  if(!isOpen) return null;

  return (
  <h1> this is the popup windows </h1>   
  )
}