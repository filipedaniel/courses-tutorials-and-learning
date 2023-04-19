/* Express App that will handling request easier */

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRoutes = require('./api/routes/products'); 
const ordersRoutes = require('./api/routes/orders');

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');



mongoose.connect(
  'mongodb://user_01:' + process.env.MONGO_ATLAS_PW + '@cluster-node-rest-shard-00-00-4lw3e.mongodb.net:27017,cluster-node-rest-shard-00-01-4lw3e.mongodb.net:27017,cluster-node-rest-shard-00-02-4lw3e.mongodb.net:27017/test?ssl=true&replicaSet=Cluster-Node-Rest-shard-0&authSource=admin'
)

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
    return res.status(200).json({});
  }
  next();
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// use: middleware
app.use('/products', productsRoutes);

app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});



module.exports = app;