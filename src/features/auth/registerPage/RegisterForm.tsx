import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import {useForm,type SubmitHandler} from "react-hook-form"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


 type FormFields= {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  confirmPassword:string;
};


export function RegisterForm()
{
  const [success, setSuccess] = useState(false);
  const {register,handleSubmit,watch,setError,formState:{errors,isSubmitting,isSubmitted}} = useForm<FormFields>();
  const navigate = useNavigate();

   const onSubmit: SubmitHandler<FormFields>= async (data)=>{
    console.log(data)
    try{
      const newUser= await axios.post("http://localhost:3000/api/auth/register",data)
      setSuccess(true)
      setTimeout(() => {navigate('/'); }, 2000);
      return newUser
    }
  catch(err:any)
  {
    setError("root",{message:err.response?.data?.message})
  }
}

  const password = watch("password");

  return(<Box component={"form"} onSubmit={handleSubmit(onSubmit)} p={10} sx={{display:"flex",flexDirection:"column",gap:4}}> 
  <TextField {...register("first_name" ,{required:"FirstName is required"})} error={!!errors.first_name} helperText={errors.first_name?.message} fullWidth label="first name" placeholder='name examle : eden' ></TextField>
  <TextField {...register("last_name",{required:"lastName is required"} )} error={!!errors.last_name} helperText={errors.last_name?.message} fullWidth label="last name" placeholder='last name examle : lagziel ' ></TextField>
  <TextField {...register("email",{required:"email is required"})} error={!!errors.email} helperText={errors.email?.message}  fullWidth type='email' label="email" placeholder='email examle : eden@gmail.com ' ></TextField>
  <TextField {...register("password" ,{required:"password is required",minLength:{value:8,message:"min 8 characters"}})}  error={!!errors.password} helperText={errors.password?.message}  fullWidth type='password' label="paswword"></TextField>
  <TextField {...register("confirmPassword",{ required:"must confirmPassword ",validate:(value)=>{return value===password || "password do not match"}})} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message}  fullWidth type='password' label="re enter password" ></TextField>
  <Button disabled={isSubmitting} fullWidth type='submit'> {isSubmitting? "Loding..." :"submit"}</Button>
  {errors.root?.message && (<Box sx={{ color: "red", fontSize: 14 }}> {errors.root.message}</Box>)}
  {isSubmitted && success && (<Box sx={{ color: "green", fontSize: 18, textAlign: "center"}}> {"user hs bean created"}</Box>)}
  </Box>
)}

