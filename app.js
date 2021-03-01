const express = require("express");
const mongoose = require('mongoose')
require("dotenv").config();


// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'));

// app
const app = express();

// routes
app.get("/", (req, res) => {
    res.send("hello from node updated");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});