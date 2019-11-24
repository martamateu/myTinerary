export const getUser=(user) => dispatch => {

    
        
    console.log("home",user) 
    fetch("/user")
    .then(response => response.json())
    .then(json => {
        console.log("user");
        
        dispatch ({
          type: "GET_USER",
          payload: json,

        });

      })
    
  }