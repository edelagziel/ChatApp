import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"
import store from './store/store.ts';
import {theme} from "./theme/theme";
import {ThemeProvider}  from '@mui/material/styles';

createRoot(document.getElementById('root')!).render(<StrictMode><ThemeProvider theme={theme}><BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter></ThemeProvider></StrictMode>);


