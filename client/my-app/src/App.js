import React from 'react';
import Home from "./components/Home.js";
import User from "./components/User.js";
import Cities from "./components/Cities.js";
import Itinerary from "./components/Itinerary.js";
import icon from "./components/HomeIcon.png";
import Activity from "./components/Activity.js";
import {BrowserRouter, Switch,NavLink, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      

  <BrowserRouter> 
  <nav>
            <ul style={navStyle}>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/User"}>Users</NavLink></li>
               <li><NavLink to={"/Cities"}>Cities</NavLink></li>
               
            </ul>
          </nav>
<Switch>

<Route exact path  = "/" component = {Home}/>
<Route path = "/User" component = {User}/>
<Route path = "/cities" component = {Cities}/>
<Route path = "/itinerary/:cityName" component = {Itinerary}></Route>
<Route path = "/activity/:itineraryName" component = {Activity}></Route>


</Switch>

</BrowserRouter> 

<nav>
<ul>
   <li><a href="/">log in</a></li>
   <li><a href="/user">create account</a></li>
</ul> 

<span className="footer">
<img src={icon} alt="icon" className="icon" />
</span>

</nav>

</div>

 
  );
}

 

const navStyle = {
  display:"flex",
  justifyContent: "space-around",
  listStyle: "none",
  backgroundColor: "teal",
  color: "white",
  height: "50px",
  paddingTop:"15px"


}

export default App;
