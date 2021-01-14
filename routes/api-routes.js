const db = require("../models");

module.exports = (app) => {

// getting all the workouts 
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

// creating a workout
  app.post("/api/workouts", (req,res) => {
    db.Workout.create({})
      .then((data) => {
          res.json(data);
      })
      .catch((err) => res.json(err));
});
  
  // finding one workout and update
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  
  // finding workouts
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
       
      })
      .catch(err => {
        res.json(err);
      });
  });

};