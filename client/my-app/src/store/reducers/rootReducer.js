import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
const rootReducer = combineReducers({cities: citiesReducer, itinerary: itineraryReducer});
export default rootReducer;