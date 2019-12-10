import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="App">

  <nav>
  <ul style={navStyle}>
     <li><NavLink class = "header" to={"/"}>Home</NavLink></li>
     <li><NavLink class = "header" to={"/User"}>Users</NavLink></li>
     <li><NavLink class = "header" to={"/Cities"}>Cities</NavLink></li>
     
  </ul>
</nav>

</div>
);
}

const navStyle = {
  display:"flex",
  justifyContent: "space-around",
  listStyle: "none",
  backgroundColor: "teal",
  height: "50px",
  paddingTop:"15px",

}

export default Header;