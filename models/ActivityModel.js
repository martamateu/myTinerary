const mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
  
    city: { type: String },
    itineraryName: { type: String },
    image: { type: String },
    activityName:{ type: String },   
    alt: {type: String},
    

  });

 module.exports= mongoose.model("activity", activitySchema);
