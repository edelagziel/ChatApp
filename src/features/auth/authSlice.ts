import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Autentication
{
  isAutanticated:boolean,
  token:string|null,
  userName:string|null
  id:number

}

const initialState:Autentication ={
isAutanticated:false,
token:null,
userName:null,
id:-1,

}
const autoSlice= createSlice({
  name:'userAuth',
  initialState ,
  reducers:{ 
    login:(state,action:PayloadAction<{token:string , isAutanticated:boolean,id:number}>)=>{
     state.isAutanticated= action.payload.isAutanticated;
     state.userName=action.payload.token;
     state.id=action.payload.id;
     //temp needed to be chnged later
    },
    logout:(state)=>{
      state.isAutanticated=false;
      state.userName=null;
      state.token = null;
      state.id=-1;
    }

  }
})

export const{login,logout}=autoSlice.actions;
export default autoSlice.reducer;