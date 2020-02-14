//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var options = {
        url: "https://us18.api.mailchimp.com/3.0/lists/40e9ba3a38",
        method: "POST",
        headers: {
            "Authorization": "Yiming e0707ab7db0c2498f43656382fe9ab9f-us4"
        }
    };

    request(options, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    })
});


app.listen(3000, function () {
    console.log("Server is running");
});


//40e9ba3a38
//e0707ab7db0c2498f43656382fe9ab9f-us4
