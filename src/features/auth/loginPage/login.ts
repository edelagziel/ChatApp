// import { UseDispatch } from "react-redux"
// import { AppDispatch } from "../../../store/store"
import axios from 'axios'
// export const 



export async function loginToServer(email:string,password:string)
{
      const  respone=await axios.post('http://localhost:3000/api/auth/login',{email,password})
        return respone; 
  }



// export async function loginToServer(email:string,password:string)
// {
//   const respone=await fetch('http://localhost:3000/api/auth/login',{
//     method:'POST',
//     body: JSON.stringify({email,password})
//   })
//   const data= await respone.json()
//   return data
// }