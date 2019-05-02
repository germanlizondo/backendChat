const express = require('express');
const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//start server
const server = app.listen(app.get('port'), () => {
    console.log('App listening on port 3000!');
});



//socketIO settings
const socketIO = require('socket.io');
const io = socketIO.listen(server);


//websockets
io.on('connection', (socket) => {
    console.log("new connection")

    socket.on("new message", (data) => {
        console.log(data);

        socket.broadcast.emit("new message",data)
    })


    socket.on("new user", (data) => {
        console.log(data);

        socket.broadcast.emit("new user",data)
    })
});