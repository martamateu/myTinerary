const mongoose = require('mongoose');

var itinerarySchema = new mongoose.Schema({
    city: { type: String },
    country: {type:String},
    rating: {type:Number},
    duration: {type:Number},
    price:{type:Number},
    hastags:{type:Array},
    itineraryName: { type: String },
    image: { type: String },




  });
 module.exports= mongoose.model("itinerary", itinerarySchema);
