let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     to: 'jen',
    //     text: 'Hey, This is Andrew'
    // });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (Message) {
    console.log('New Message', Message);
});