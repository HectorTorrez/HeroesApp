
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  return (
    <>

      <Routes>

        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }>

        </Route>

        {/* <Route path="login/*" element={<LoginPage />}
        /> */}

        <Route path="/*" element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>

        }>
        </Route>

        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}



      </Routes>
    </>
  )
}

