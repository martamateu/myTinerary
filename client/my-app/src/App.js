import React from 'react';
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import User from "./components/User.js";
import Cities from "./components/Cities.js";
import Itinerary from "./components/Itinerary.js";
import Activity from "./components/Activity.js";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      

  <BrowserRouter> 

          <Header />

          <Footer />
          
<Switch>

<Route exact path  = "/" component = {Home}/>
<Route path = "/User" component = {User}/>
<Route path = "/cities" component = {Cities}/>
<Route path = "/itinerary/:cityName" component = {Itinerary}></Route>
<Route path = "/activity/:itineraryName" component = {Activity}></Route>
<Route path = "/Footer" component = {Home}/>
<Route path = "/Header" component ={Header}/>


</Switch>

</BrowserRouter> 

</div>

 
  );
}

 



export default App;
