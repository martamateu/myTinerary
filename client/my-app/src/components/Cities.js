
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCities } from "../store/actions/cityActions";
import {NavLink} from "react-router-dom";


class Cities extends Component {

  componentDidMount() {
    this.props.getCities();
   
  }


  render(){



if (this.props.isLoaded) {
  
  return (

    <div>
    

  
     {
      
      this.props.cities.map(city => <NavLink className="cities" to={"/itinerary/"+city.name} key={city._id}> {city.name} </NavLink>) 
      
    
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
  cities: state.cities.cities,
     isLoaded: state.cities.isLoaded

  }
}


export default connect(mapStateToProps, {getCities})(Cities)