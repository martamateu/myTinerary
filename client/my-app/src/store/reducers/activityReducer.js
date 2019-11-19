const initialState = {
    activity: [],
    isLoaded:false

  }
  
  export default function activityReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_ACTIVITY":
        return {
            ... state, 
            activity: action.payload,
            isLoaded: true
     
        }
      default:
        return state
    }
  }