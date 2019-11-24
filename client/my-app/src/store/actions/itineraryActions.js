export const getItinerary=(cityName) => dispatch => {

    
        
    console.log("home",cityName)
    fetch("/itinerary/"+cityName)
    .then(response => response.json())
    .then(json => {
        console.log("itinera");
        
        dispatch ({
          type: "GET_ITINERARY",
          payload: json,

        });

      })
    
  }