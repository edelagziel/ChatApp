import Header from "./components/header";
import { Route,Routes } from "react-router-dom"; 
import  Footer  from "./components/footer";
import style from "./App.module.css"
import "./App.css"
import {ChatPage} from "./features/chat/ChatPage"
import {PublicRoutes} from "./routes/PublicRoutes"
import {ProtectedRoutes} from "./routes/ProtectedRoutes"
import {LoginPage} from "./features/auth/loginPage/loginPage"
import { Register } from "./features/auth/registerPage/RegisterPage";
import Box from '@mui/material/Box';
import {MsgPage} from "./features/msg/MsgPage"



export function App()
{
  return(
  <Box className={style.appLayout} sx={{bgcolor: "background.default"}}>
    <Header/>
    <main className={style.mainContent}>
    <Routes>
      <Route  element={<ProtectedRoutes/>}>
        <Route path="/home" element={<ChatPage pageName="friends & Groups"></ChatPage>}></Route>
        <Route path="/Grope" element={<ChatPage pageName="Groups"></ChatPage>}></Route>
        <Route path="/friends" element={<ChatPage pageName="friends"></ChatPage>}></Route>
        <Route path="/chat/:id" element={<MsgPage></MsgPage>}></Route>
      </Route>
      <Route element={<PublicRoutes/>}>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Route>
    </Routes>
    </main>
    <footer>
        <Footer/>
    </footer>
  </Box>
);
}

