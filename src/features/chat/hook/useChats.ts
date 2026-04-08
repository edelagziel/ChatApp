
import axios from 'axios';
import { useSelector } from "react-redux";
import { useEffect,useState } from 'react';
import {type Chat} from "../type/chat"


export function useChats()
{
  const id =useSelector((state:any)=>state.auth.id)
  console.log(id);
  const [Chats,SetChats]=useState<Chat[]>([]);

  useEffect( ()=>{
     const fetchData= async()=>{
    const response= await axios.get<Chat[]>(`http://localhost:3000/api/chats/user/${id}`)
    SetChats(response.data);
    console.log(response);
    return response
    }
      fetchData();
  },[id])

  return {Chats}

}


