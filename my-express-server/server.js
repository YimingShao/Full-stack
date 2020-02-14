// constant to require "express"
const express = require("express");

// build server
const app = express();

// Make a get request
app.get("/", function(request, response){
  response.send("Hello");
});

//add the port and add the callback function
app.listen(8080, function(){
  console.log("Server started on port 8080");
});
