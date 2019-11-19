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

// activityrouter.get('/:itineraryname',
// 	(req, res) => {
//   		let activityRequested = req.params.itinerary.name;
//   		activityModel.find({ activityrequested: activity.name })
// 			.then(activity.name => {
// 				res.send(activity)
// 			})
// 			.catch(err => console.log(err));
// });


activityrouter.route("/:activityname").get((req, res) => {
    activity.find({ activity: req.params.activity.name }, (err, activity) => {
      res.json(activity);
    });
  });


module.exports = activityrouter;