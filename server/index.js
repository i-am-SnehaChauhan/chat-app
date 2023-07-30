const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = http.createServer(app);

const io = socketIO(server);

const port = 4500 || process.env.PORT ;

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    }
);
