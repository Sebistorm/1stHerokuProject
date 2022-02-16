const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})


app.listen(8080, () => {
    console.log("The server is running on Port: ", 8080)
})