import {Chat} from './chat/chat'
import './chat/styles.scss'

const chat = new Chat('#wraper', {

})

window.c = chat



// import {express} from 'express'

// let express = require('express');
// let app = express();
// let server = require('http').createServer(app);
// const io = require("socket.io")(server);

// // const io = require('socket.io')(3000, {
// //     cors: {
// //       origin: "*",
// //     },
// // })

// server.listen(3000, () => {
//     console.log('listening on *:3000');
// })

// console.log('start');


// app.get('/', function(request, respons) {
//     respons.sendFile(__dirname + '/index.html')
// })

// let users = []
// let connections = []

// io.sockets.on('connection', (socket) => {
//     console.log('CONNECT');
//     // connections.push(socket);

//     // socket.on('new-user', username => {
//     //     console.log('CONNECT', username);
//     //     users[socket.id] = username
//     //     socket.broadcast.emit('user-connected', username)
//     // })

//     socket.on('disconnect', () => {
//         // connections.splice(connections.indexOf(socket), 1)
//         console.log('DISCONNECT');
//     })
// })





