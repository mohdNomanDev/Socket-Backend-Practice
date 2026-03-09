export default function chatSocketHandler(io) {
  //chat namespace
  const chat = io.of("/chat");



  chat.on("connection", (socket) => {
    const id = socket.id;
    console.log("Chat user Connected with ", id);
    socket.emit("connected", "You are now connected with " + id);
    socket.on("chat", (msg) => {
      console.log(msg);
    });

    socket.on("disconnect", () => {
      console.log("Chat user Disconnected");
    });
  });
}
