const express = require("express");
const app = express();
const sequelize = require("./config/connection");
const controllers = require('./controllers')

const Model = require("./models");

const PORT = 5500;

app.use("/api", controllers);

app.get('/', (req, res) =>{
    res.json("hi");
});

app.get('/api', (req, res) =>{
    res.json("bruh");
});

app.get('/api/bruhest', (req, res) =>{
    res.json("bruher");
});


sequelize.sync().then(() =>{
app.listen(PORT, () =>{
    console.log ("I'm running");
});
});

// sequelize.sync().then(() =>{

// })