import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { AppRouter } from './router/AppRouter';
import './styles.css'

const getRoutes = AppRouter();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={getRoutes}/>

  </React.StrictMode>
)
