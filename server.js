require("dotenv").config();


const { error } = require("console");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT 

const app = express(); 

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`My Week 2 API`);
});

app.post("/register", (req, res) => {
    const { name, email } = req.body;
    if(!name || !email){
        return res.status(400).json( { error: `Missing Data`} );
    }
    res.status(201).json({ message: `Registered: ${name} (${email})` });
})

app.get("/user/:id", (req, res) => {
    res.json( { id: req.params.id, name: "Special User"} )
});

app.get("/search", (req, res) => {
    const det = req.query.id;
    res.send(det);
})

app.listen(PORT, () => { 
    console.log(`Listening from http://localhost:${PORT}`)
})