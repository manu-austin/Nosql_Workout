const mongoose = require("mongoose");

// Schema constant using mongoose Schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [{
            type: {type: String, required: true},
            name: {type: String, required: true},
            duration: {type: Number, required: true},
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number},
            distance: {type: Number}
        }],
});

const workout = mongoose.model("workout", WorkoutSchema);

// eport of module for the app's use
module.exports = workout;