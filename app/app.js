const socket = io("ws://localhost:8080");

socket.on("message", (msg) => {
  const li = document.createElement("li");
  li.innerHTML = msg;
  document.querySelector("ul").appendChild(li);
});

document.getElementById("send").onclick = () => {
  const text = document.getElementById("text").value;
  const room = document.getElementById("room").value;

  socket.emit("message", text, room);
};

document.getElementById("join").onclick = () => {
  const room = document.getElementById("room").value;

  socket.emit("join-room", room);
};
