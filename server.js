const express = require("express");

const app = express();

 app.get('/', (req, res) =>{
     res.send("HelloWorld");
     console.log("server is Connected");
 })
 const PORT =5000;
app.listen(PORT)