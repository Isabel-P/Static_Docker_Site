const { request } = require('express');
const express = require('express'); //allows me to use it
const path    = require('path');
const server  = express();
const port    = 3000;//port the server will run on
server.use(express.json()); //allows for parsing into jason

server.listen (port, () => console.log ('server is now listening on port '+ port)); //on and listening for request

server.get('/', (req, res) => {
    res.json({"message": "Docker Request Sent. Have a nice day."})
})