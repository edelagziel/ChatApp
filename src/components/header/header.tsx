import { NavLink } from "react-router-dom";
import  Typography  from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Box from  '@mui/material/Box';
import {linkStyles,Active} from './header.styles';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import avatarImg from '../../assets/2.jpg';
import { useAuthGuard } from "../../hooks/useAuthGuard";

export function Header()
{

  const isAuth=useAuthGuard();
  return (<>
      <AppBar component="nav">
        <Toolbar sx={{justifyContent:"space-between"}}>
           <Box  sx={{display:"flex",gap:2 , alignItems:"center"}} >
              <Typography component={NavLink} to={"/home"} color="inherit" sx={linkStyles} variant="h5">chat App</Typography>
           </Box>
          {isAuth ? 
          <Box  sx={{display:"flex",gap:2}}>
          <Button component={NavLink} to={"/home"} color="inherit"  sx={{...linkStyles,'&.active':Active}} > all <HomeIcon  fontSize="medium"/>  </Button>
          <Button component={NavLink } to= {"/Grope"}  color="inherit" sx={{...linkStyles,'&.active':Active}}>Grope <GroupsIcon fontSize="medium"/></Button>
          <Button   color="inherit" sx={{ ...linkStyles, '&.active': Active }} component={NavLink} to={"/friends"}  >friends <PeopleAltIcon fontSize="medium"/></Button>    
          <Avatar alt="Remy Sharp" src={avatarImg}/>
          </Box>
        :  
        <Box  sx={{display:"flex",gap:2}}>
          <Button component={NavLink} to={"/"} color="inherit"  sx={{...linkStyles,'&.active':Active}} > login   </Button>
          <Button component={NavLink } to= {"/register"}  color="inherit" sx={{...linkStyles,'&.active':Active}}>register </Button>
        </Box>
        }
        </Toolbar>
      </AppBar>
      <Toolbar/>
      
  </>);
}



