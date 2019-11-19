export const getCities=() => dispatch => {

    
        
          console.log("home")
          fetch("/cities")
          .then(response => response.json())
          .then(json => {
              dispatch ({
                type: "GET_CITIES",
                payload: json,

              });

            })
          
        }