const express = require ("express");
const cityRouter = express.Router();
let CityModel = require('../models/CityModel');


cityRouter.get("/",(req, res) => {
    console.log("cities")
    CityModel.find()
        .then(cities => res.json(cities))
        .catch(err => res.status(400).json('Error: ' + err));
});

cityRouter.post((req, res) => {
    let city = new City(req.body);
    city.save();
    res.status(201).send(city);
  });

cityRouter.route("/:name").get((req, res) => {
  City.find({ name: req.params.name }, (err, city) => {
    res.json(city);
  });
});



module.exports = cityRouter;








