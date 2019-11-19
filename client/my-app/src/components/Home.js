
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import myLogo from "./logo.png";
import arrow from "./arrow.png";



class Home extends Component {

 

  render() {

    
 
       return (
         <div id="indexstyle">
           <img src={myLogo} alt="logo" className="logo" />

          <span id="frase">
           <h3>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </h3>
        </span>
        <span id="textoflecha">
          <h2>Start Browsing</h2>

        </span>

        <NavLink className="menu" to = {"/cities"}>

        <img src={arrow} alt="arrow" className="arrow" />

        </NavLink>

      

         </div>
    
       );
   }
}



export default Home