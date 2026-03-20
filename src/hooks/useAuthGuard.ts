// import store from "../store/store";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";


export function useAuthGuard()
{
  const isAuth=useSelector((state:RootState)=>state.auth.isAutanticated)
  return isAuth;
}