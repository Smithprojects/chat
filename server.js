const io = require('socket.io')(3000, {
    cors: {
      origin: "*",
    },
})

const users = {}

io.on('connection', socket => {

    socket.on('new-user', username => {
        users[socket.id] = username
        socket.broadcast.emit('user-connected', username)
        console.log(users)
    })

    console.log('new User')
    // socket.emit('chat-message', 'Hello men')
    socket.on('send-chat-message', dataMessage => {
        console.log(dataMessage)
        socket.broadcast.emit('chat-message', {message:dataMessage.message, mess:dataMessage.mess, username: users[socket.id]})
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnect', users[socket.id])
        delete users[socket.id]
    })
})

