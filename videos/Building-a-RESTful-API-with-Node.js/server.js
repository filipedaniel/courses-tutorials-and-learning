/**
 * Code for node server
 */

//const http = require('http');
const app = require('./app');


// port that will serve the server
const port = process.env.port || 8080;

//const server = http.createServer();

// starts listening the port and then execute the code on 'createServer'
//server.listen(port);

app.listen(port)


