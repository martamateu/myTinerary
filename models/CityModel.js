const mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    name: String,
    country: String
  });
 module.exports= mongoose.model("city", citySchema);
