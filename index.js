const { request } = require('express');
const express = require('express'); //allows me to use it
const path    = require('path');
const server  = express();
const port    = 3000;//port the server will run on
server.use(express.json()); //allows for parsing into jason