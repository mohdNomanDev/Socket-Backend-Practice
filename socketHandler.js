export default function socketHandler(io) {
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (msg) => {
      console.log("Received message:", msg);
      io.emit("message", "Hii Socket"); // Broadcast the message to all clients
    });

    socket.on("confirm", (msg, confirmation) => {
      console.log(msg);
      confirmation("your order is confirmed");
    });

    socket.on("joinRoom", (room, confirmation) => {
      socket.join(room);
      confirmation("Joined Successful");
    });

    socket.on("offer", ({ room, message }) => {
      socket.to(room).emit("offer", message);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
}
