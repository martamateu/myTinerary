const initialState = {
    itineraries: [],
    isLoaded:false

  }
  
  export default function itineraryReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_ITINERARY":
        return { 
          state, 
          itineraries: action.payload, 
          isLoaded: true
     
        }
      default:
        return state
    }
  }