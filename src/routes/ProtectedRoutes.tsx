import { useAuthGuard } from "../hooks/useAuthGuard"
import { Navigate ,Outlet } from "react-router-dom"
export function ProtectedRoutes()
{
  return(
    useAuthGuard() ? <Outlet/> : <Navigate to= "/" replace />)
}

