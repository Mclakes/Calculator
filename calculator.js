const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile( __dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {

    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);

    var result = num1 / Math.pow(num2,2);
  
    res.send("Your BMI is " + result);
});

app.listen(3000, function () {
    console.log("this app is logged to port 3000")
});