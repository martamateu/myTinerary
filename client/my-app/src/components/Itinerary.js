
import React, { Component } from "react";
import { connect } from "react-redux";
import { getItinerary } from "../store/actions/itineraryActions";
import {NavLink} from "react-router-dom";

class Itinerary extends Component {

    componentDidMount() {
      this.props.getItinerary(this.props.match.params.cityName);
      
    }
    render(){

  
  if (this.props.isLoaded) {
    
    return (
  
      <div>
      
       {
        
        this.props.itinerary.map(itinerary => <NavLink className="itineraries" to={"/activity/"+itinerary.name} key={itinerary.itineraryName}> {itinerary.itineraryName} </NavLink>) 
        
      

       }
      
      </div>
    )
  
  }else {
     return(<p>loading</p>)
  
   
    }
  }
  }
  
  
  
  
  const mapStateToProps = (state) => {
    return {
    itinerary: state.itinerary.itineraries,
       isLoaded: state.itinerary.isLoaded
  
    }
  }
  
  
  export default connect(mapStateToProps,{getItinerary})(Itinerary)