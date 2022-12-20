const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/AngularCrud', (err) =>{
    if(!err)
    console.log('MongoDB connection succeeded.');
    else
    console.log('Error in DB connection:'+JSON.stringify(err, undefined, 2))
});

var employeeController = require('./controllers/employeeController.js');

app.use('/employees', employeeController);