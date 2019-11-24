import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
const rootReducer = combineReducers({cities: citiesReducer, itinerary: itineraryReducer, activity: activityReducer});
export default rootReducer;