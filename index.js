const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv= require('dotenv').config();


var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, (err) =>{
    if(!err)
    console.log('MongoDB connection succeeded.');
    else
    console.log('Error in DB connection:'+JSON.stringify(err, undefined, 2))
});

var employeeController = require('./controllers/employeeController.js');

app.use('/employees', employeeController);
