const itineraryModel = require ("../models/Itinerary");
const express = require ("express");
const router = express.Router();
router.post('/', (req, res) => {
    console.log("posting itin");
    
    const newitinerary = new itineraryModel({
        city: req.body.city,
        country: req.body.country,
        rating: req.body.rating,
        duration: req.body.duration,
        price:req.body.price,
        hastags: req.body.hastags,
        itineraryName: req.body.itineraryName,
        image: req.body.image,
    })
    newitinerary.save()
      .then(itinerary => {
      res.send(itinerary)
      })
      .catch(err => {
      res.status(500).send("Server error")}) 
});


router.get('/:cityname',
	(req, res) => {
  		let cityRequested = req.params.cityname;
  		itineraryModel.find({ city: cityRequested })
			.then(itinerary => {
				res.send(itinerary)
			})
			.catch(err => console.log(err));
});



module.exports = router;