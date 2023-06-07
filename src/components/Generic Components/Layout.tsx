import { Outlet } from "react-router-dom"
import Title from "./Title"

const Layout = () => {
  return (
    <div className="app container">
            <Title/>
            <Outlet/>

    </div>
  )
}

export default Layout