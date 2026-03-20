import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Autentication
{
  isAutanticated:boolean,
  token:string|null,
  userName:string|null

}

const initialState:Autentication ={
isAutanticated:false,
token:null,
userName:null
}
const autoSlice= createSlice({
  name:'userAuth',
  initialState ,
  reducers:{ 
    login:(state,action:PayloadAction<{token:string , isAutanticated:boolean}>)=>{
     state.isAutanticated= action.payload.isAutanticated;
     state.userName=action.payload.token;
     //temp needed to be chnged later
    },
    logout:(state)=>{
      state.isAutanticated=false;
      state.userName=null;
      state.token = null;
    }

  }
})

export const{login,logout}=autoSlice.actions;
export default autoSlice.reducer;