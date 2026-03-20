// import style from "./footer.module.css"
import Box from '@mui/material/Box';
import {footerStyle} from "./footer.style"
import {currentDate} from "./footer.utils"
// import { useEffect, useState } from 'react';


export function Footer()
{ 
  return ( 
  <Box component="footer" sx={footerStyle}>
    @ {currentDate()}
  </Box>
  );
}



  //  const [TimecurrentSec,SetCurrentSec]=useState(currentSec());

  // useEffect(()=>{
  //   const id=setInterval(()=>{
  //   SetCurrentSec(currentSec());
  //   },400)
  //   return ()=>clearInterval(id);
  // },[])



  // return (
  // <Box component="footer" sx={footerStyle}>
  //   @ {TimecurrentSec}
  // </Box>
   
  // );