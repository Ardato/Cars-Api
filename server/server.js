const express = require("express");
const data = require('./data.json')
const app = express();

const port = process.env.PORT || 5000;



app.get("/api/cars", (req, res) => {
    return res.send(data.cars);
    
});

app.listen(port, () => console.log("server at http://localhost:5000"));
