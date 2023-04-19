const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const port = 3000;

const app = express();
const api = require('./routes/router');
app.use(bodyParser.json());
app.use(cors());

app.use('/', api);

const connect = () => mongoose.connect("mongodb://localhost:27017/demo-database", {
  useNewUrlParser: true,
  useCreateIndex: true
});
connect();

mongoose.connection.on('error', () => { 
  return console.log('Couldn´t connect to database!', err);
})

mongoose.connection.on('disconnected', () => {
  return console.log('Mongoose default connection is disconnected!');
})

mongoose.connection.on('connected', () => {
  return console.log(`Mongoose connected!`);
})

app.listen(port, () => {
  console.log("Server running!")
})