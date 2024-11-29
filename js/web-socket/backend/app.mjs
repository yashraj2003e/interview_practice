import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Hello"));

const server = http.createServer(app);
const io = new Server(server);

let users = new Set();
let currentCode = "";

let cursors = [];

io.on("connection", (socket) => {
  users.add(socket.id);

  socket.broadcast.emit("count", users.size);
  socket.emit("count", users.size, currentCode);

  socket.on("change", (text) => {
    currentCode = text;
    socket.broadcast.emit("change", text);
  });

  // socket.on("disconnect", (reason) => console.log(reason));

  socket.on("reconnect", (reason) => console.log(reason));

  socket.on("disconnecting", () => {
    if (users.size == 1) {
      console.log(currentCode);
    }
  });

  socket.on("cursor", (position) => {
    cursors[socket.id] = position;
    console.log(cursors);
  });

  socket.on("disconnect", () => {
    users.delete(socket.id);
    socket.broadcast.emit("count", users.size);
  });
});

server.listen(3000);
