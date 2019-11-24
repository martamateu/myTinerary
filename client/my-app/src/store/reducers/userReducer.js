const initialState = {
    user: [],
    isLoaded:false

  }
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_USER":
        return {
            ... state, 
            activity: action.payload,
            isLoaded: true
     
        }
      default:
        return state
    }
  }