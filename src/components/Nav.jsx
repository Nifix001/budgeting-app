// rrd imports
import { NavLink } from "react-router-dom"

// assets
import logo from "../assets/logomark.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink>
        <img src={logo} alt=""  height={30}/>
      </NavLink>
    </nav>
  )
}

export default Nav
