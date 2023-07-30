const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

const port = 4500 || process.env.PORT ;

server.listen(port, () => {
    console.log('Server started!');
    }
);
