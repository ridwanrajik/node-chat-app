const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
// const hbs = require('hbs');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
// let io = socketIO(http.createServer(express()));

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (messageCreated) => {
        console.log('Create Message', messageCreated);
        io.emit('newMessage', {
            from: messageCreated.from,
            text: messageCreated.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });
})

server.listen(port, () => {
    console.log(`server have started at port ${port}`);
});