import { configureStore } from "@reduxjs/toolkit";
import autoReducer from "../features/auth/authSlice"

export const store= configureStore({
  reducer:{
    auth: autoReducer
  }

})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;