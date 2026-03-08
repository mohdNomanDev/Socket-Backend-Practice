
export default function socketHandler(io) {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (msg) => {
      console.log('Received message:', msg);
      io.emit('message', 'Hii Socket'); // Broadcast the message to all clients
    });

    socket.on('chat', (msg) => {
        console.log(msg);
        socket.broadcast.emit('broadcast',msg);
    });

    socket.on('confirm', (msg,confirmation) => {
        console.log(msg);
        confirmation('your order is confirmed');
    });

    

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });

    
});
}

