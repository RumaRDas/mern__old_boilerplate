const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
    res.send("HelloWorld yess....");

})

app.listen(PORT, () => console.log(`server is started at: ${PORT}`));