const activityModel = require ("../models/ActivityModel");
const express = require ("express");
const activityrouter = express.Router();
activityrouter.post('/', (req, res) => {
    console.log("posting activity");
    
    const newactivity = new activityModel({
        city: req.body.city,
        itineraryName: req.body.itineraryName,
        image: req.body.image,
        activityName: req.body.activityName,
        alt: req.body.alt,
    })
    newactivity.save()
      .then(activity=> {
      res.send(activity)
      })
      .catch(err => {
      res.status(500).send("Server error")}) 
});

activityrouter.get('/:itineraryname',
	(req, res) => {
      let activityRequested = req.params.itineraryname;
      console.log("activity",req.params.itineraryname);
      
  		activityModel.find({ itineraryName: activityRequested })
			.then(activity => {
				res.send(activity)
			})
			.catch(err => console.log(err));
});


// activityrouter.route("/city").get((req, res) => {
//     activity.find({ city: req.params.city}, (err, activity) => {
//       res.json(activity);
//     });
//   });

//   activityrouter.route('/:city',
// 	(req, res) => {
//   		let activityRequested = req.params.city;
//   		activityModel.find({ city: activityRequested })
// 			.then(activity => {
// 				res.send(activity)
// 			})
// 			.catch(err => console.log(err));
// });

module.exports = activityrouter;