import { Outlet } from "react-router-dom"
import { HeroesRoutes } from "./heroes/routes/HeroesRoutes"
import { Navbar } from "./ui"


export const HeroesApp = () => {
  return (
    <>
        <HeroesRoutes/>
    </>
  )
}
