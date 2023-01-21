    import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Navigate,
  } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () =>  createBrowserRouter([
        {
          path: "login",
          element:  <LoginPage/>, 
        
        },
        {
          path:"/*",
          element: <HeroesRoutes/>
        }
      ]);
