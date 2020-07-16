const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cookiParser = require("cookie-parser");


const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookiParser());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// Add routs< both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/merndata");

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
