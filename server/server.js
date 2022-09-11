const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
// const hbs = require('hbs');

const {generateMessage, generateLocationMessage} = require('./utils/message')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
// let io = socketIO(http.createServer(express()));

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
            

    socket.on('createMessage', (messageCreated, callback) => {
        console.log('Create Message', messageCreated);
        io.emit('newMessage', generateMessage(messageCreated.from, messageCreated.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });
})

server.listen(port, () => {
    console.log(`server have started at port ${port}`);
});