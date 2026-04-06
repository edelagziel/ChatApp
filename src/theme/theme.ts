import { createTheme } from "@mui/material/styles";
export const theme=createTheme(
{
  palette:
  {
     primary: {
      main: "#25D366",
      light: "#5BEE8B",
      dark: "#128C7E",
    contrastText: "#FFFFFF"         
       },
    secondary: {
        main: "#128C7E",
        light: "#4CAF9A",
        dark: "#0A5C54",
        contrastText: "#FFFFFF",
              },

    background: {
        default: "#f4ecec",
        paper: "#dcf6d6",
      }
      
  }

})
