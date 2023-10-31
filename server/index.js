const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("user is connected");

  socket.on("message", (msg, room) => {
    if (room === "") {
      io.emit("message", `${socket.id} said ${msg}`);
      console.log("to all");
    } else {
      io.to(room).emit("message", `${socket.id} said ${msg}`);
      console.log("to room");
    }
  });

  socket.on("join-room", (room) => {
    socket.join(room);
  });
});

http.listen(8080, () => {
  console.log("listening on port 8080");
});
