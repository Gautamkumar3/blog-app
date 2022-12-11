const express = require("express");
const http = require("http");
const cors = require("cors");
const Connect = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const userRouter = require("./user/user.router");
const postRouter = require("./post/post.router");
const commentRouter = require("./comment/comment.router");

const app = express();
const server = http.Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("comment", (data) => {
    socket.broadcast.emit("comment", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to GK blog");
});

server.listen(PORT, async () => {
  await Connect();
  console.log(`Server is running on port ${PORT}`);
});
