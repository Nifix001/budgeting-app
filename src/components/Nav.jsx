// rrd imports
import { Form, NavLink } from "react-router-dom"

// assets
import logo from "../assets/logomark.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/"
      aria-label="Go to home"
      >
        <img src={logo} alt=""  height={30}/>
        <span>HomeBudget</span>
      </NavLink>
      {
        userName && (
        <Form
        method="post"
        action="/logout"
        >
        <button type="subnmit" className="btn btn--warning">
            <span>Delete User</span>
            
        </button>
        </Form>
    )}
    </nav>
    )
}

export default Nav
