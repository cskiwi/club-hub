const cors = require('cors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let
  mongoURL = process.env.MONGODB_URI || process.env.MONGO_URL,
  mongoURLLabel = "";


mongoose.connect(mongoURL, { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// resources
app.use(express.static(path.join(__dirname, 'dist')));

// Api
app.use('/api/v1/users', require('./server/routes/users.route').users);
app.use('/api/v1/clubs', require('./server/routes/clubs.route').clubs);

// Client
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});



module.exports = app;
