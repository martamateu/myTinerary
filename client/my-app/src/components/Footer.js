import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export class Footer extends Component {
    render() {
        return (
     
          <div>
            
            <NavLink className="footer" to = {"/"}>

              Home

              </NavLink>

        </div>

        );
        }
  }
  
  
  export default Footer;

