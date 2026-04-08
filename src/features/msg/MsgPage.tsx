import {MsgTopInfo} from "./MsgTopInfo"
import {MsgList} from "./MsgList"
import { Box } from "@mui/system";
import {MsgCreate} from "./MsgCreate"
import {getChatMessages} from "./getChatMessages"
import { useState } from "react";
import { useEffect } from "react";
import { useParams,useSearchParams} from "react-router-dom";
import { type Messages} from "./type/msg.type"


export function MsgPage()
{

const [msg,setMsg]=useState<Messages>([]);
const [err, setErr] = useState<string | null>(null);
const {id}= useParams();
const [searchParams] = useSearchParams();
const chatName = searchParams.get("chatName");

if (!id) return <div>No chat id</div>;
const chatid=parseInt(id,10)
if (Number.isNaN(chatid)) return <div>Invalid id</div>;

useEffect(()=>{
  const fetchMessages=async ()=>{
    try{
      const response:Messages=await getChatMessages(chatid);
      setMsg(response)
    }
    catch(err:any)
    {
      console.log(err)
      setErr(err.response?.data?.message ?? 'Something went wrong');
    }
  }
  fetchMessages();
  
},[chatid])



  return (<Box sx={{mt:2 ,flex:1}} gap={8} display="flex" flexDirection="column" height={"100%"}  justifyContent={"flex-end"}>
      <MsgTopInfo chatName={chatName ??" name not aviable "}/>
        <MsgList Messages= {msg}/>
      <MsgCreate></MsgCreate>
    </Box>
    )
}