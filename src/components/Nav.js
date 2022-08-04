import React from "react";
 import "../App.css";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <nav>
          
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/custom">Custom Orders</NavLink>
            <NavLink to="/cart">Cart <span>0</span></NavLink>
       </nav>
    )
}
export default Nav

