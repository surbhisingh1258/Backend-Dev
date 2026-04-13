const express = require("express");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const corsConfig = require("./config/cors");
const sessionConfig = require("./config/session");

const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const messageRoutes = require("./routes/message.routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(xssClean());
app.use(corsConfig);
app.use(sessionConfig);

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);

module.exports = app;