import React from 'react'
import ReactDOM from 'react-dom/client'

//router dom
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";

//css
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </BrowserRouter>,
)
