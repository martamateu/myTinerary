export const getActivity=(itineraryName) => dispatch => {

    
        
    console.log("home") 
    fetch("/activity/"+itineraryName)
    .then(response => response.json())
    .then(json => {
        console.log("activity");
        
        dispatch ({
          type: "GET_ACTIVITY",
          payload: json,

        });

      })
    
  }