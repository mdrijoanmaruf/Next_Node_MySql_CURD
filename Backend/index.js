const express = require('express');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

const app = express();

app.get("/test" , (req , res) => {
    res.status(200).send("Next.js Node.js MySql App")
})

const PORT = process.env.PORT || 5000;

// Conditional Listen
mySqlPool.query('SELECT 1').then(() => {

    console.log("MySql DB Connected");
    app.listen(PORT , () => {
        console.log("Server is running");
    })
}).catch((error) => {
    console.log(error);
})
