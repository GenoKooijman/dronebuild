const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const io = new Server(server, {
  cors: {
    origin: "*",
}});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("move", (data) => {
    console.log("Move command received:", data);
    io.emit("updateDrone", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.use(express.static("public"));

server.listen(PORT, () => {
  console.log(`Socket.IO server running on http://localhost:${PORT}`);
});
