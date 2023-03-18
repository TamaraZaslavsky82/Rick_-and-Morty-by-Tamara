const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index.js')

server.use(express.jso())
server.use('/', router)


server.lister(PORT, () => {
   console.log('Server raised in port ' + PORT);

   
});