// import express from "express";
// import http from "http";
// import { Server } from "socket.io";

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server);

// app.get("/", (req, res) => res.send("Working"));

// io.on("connection", (Socket) => {
//   Socket.on("join", () => console.log("JOIN"));
// });

// io.on("join", () => console.log("Someone joined !"));

// app.listen(3000, () => console.log("App is running on port 3000 !"));

// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
// import cors from "cors";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
// const app = express();
// app.use(cors());
// // let __filename = fileURLToPath(import.meta.url);
// // let __dirname = dirname(__filename);
// // console.log(path.join(__dirname));

// const server = http.createServer(app);
// const io = new Server(server);

// app.get("/", (req, res) => {
//   console.log(1);
//   res.send("Working");
// });

// // Listen for connections
// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Listen for 'join' events on this specific socket
//   socket.on("join", () => {
//     console.log("JOIN"); // This will now work
//     io.emit("message", "Someone joined!"); // Optional: Broadcast to all clients
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

// io.on("join", () => console.log("Someone joined !"));

// // Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`App is running on port ${PORT}!`);
// });

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Hello"));

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (Socket) => {
  Socket.on("join", () => {
    console.log("Someone joined !");
    Socket.emit("got it");
  });

  setTimeout(() => {
    Socket.emit("got it");
  }, 10000);
});

server.listen(3000);