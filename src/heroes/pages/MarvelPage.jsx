import { Outlet } from "react-router-dom"
import { HeroeList } from "../components"

export const MarvelPage = () => {
  return (
    <>
    <h1>MarvelPage</h1>
    <hr />
    <HeroeList publisher='Marvel Comics'/>
    <Outlet/>
    </>
  )
}
