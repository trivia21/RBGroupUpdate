// Get Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//Get our api routes 

const api = require('./server/routes/api');

const app = express()

//parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//point static file path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//set api routes
app.use('/api', api);

// catch all the routes and return the index file
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

/**
 * Get the prot from environment and store in Express.
 */

const port = process.env.PORT || '3000';

app.set('port', port);

/**
 * create hhtp server
 */

const server = http.createServer(app);

/**
 * Listen to the provided
 */

server.listen(port, () => console.log(`API running on localhost: ${port}`));
