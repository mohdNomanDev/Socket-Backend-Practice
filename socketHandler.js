
export default function socketHandler(io) {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (msg) => {
      console.log('Received message:', msg);
      io.emit('message', 'Hii Socket'); // Broadcast the message to all clients
    });

    socket.on('chats', (msg) => {
        console.log(msg);
        socket.emit('reply', {name: 'Mohd Noman', chats: 'Hello bro'});
    })
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
});
}

