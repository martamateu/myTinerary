const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cityRouter = require("./routes/cityrouter.js");
const mongoose = require('mongoose');
const itineraryroute = require("./routes/itineraryroute.js");
const activityroute = require("./routes/activityroute.js")

require('dotenv').config();


const port = process.env.PORT || 5000;
const db=process.env.ATLAS_URI

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());


app.use("/cities",cityRouter);
app.use("/itinerary",itineraryroute);
app.use("/activity", activityroute);
app.get("/Sample", function (req,res) { 
    res.send("HELLO WORLD");
});

app.listen(port);
console.log('Magic happens on port' + port);




