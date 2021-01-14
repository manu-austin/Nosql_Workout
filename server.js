const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// connection to port or 3000
const PORT = process.env.PORT || 3000;

// variable creation for express
const app = express();

app.use(logger("dev"));

// parsing info 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// gives info where to get statis information for the app
app.use(express.static("public"));

// creating mongoose connection
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// using html and api routes 
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});