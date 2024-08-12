const express= require('express'); // importing the express module
const dotenv = require('dotenv');
const jwt= require('jsonwebtoken');


const app = express(); //assigning the express app instance 

dotenv.config() // Set up Global configuration access

let PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`);
});

app.post("/", (req, res)=>{
    res.render('generateToken');
})