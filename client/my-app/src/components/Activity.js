
import React, { Component } from "react";
import { connect } from "react-redux";
import { getActivity } from "../store/actions/activityActions";

class Activity extends Component {

    componentDidMount() {
      this.props.getActivity(this.props.match.params.itineraryName);
    }
    render(){
  
  if (this.props.isLoaded) {
    
    return (
  
      <div>
      
       {
        
        this.props.activity.map (activity => <p key={activity._id}>> {activity.name} </p>) 
         
        
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
    activity: state.activity.activities,
      isLoaded: state.activity.isLoaded
  
    }
  }
  
  
  export default connect(mapStateToProps, {getActivity})(Activity)  