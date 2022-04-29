const express = require("express");

const app = express();

app.get("/", function (req, res) {
    console.log(__dirname);
});

app.listen(3000, function () {
    console.log("this app is logged to port 3000")
});