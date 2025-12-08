const express = require("express");
const app = express();
const port = 5174;

const cors = require("cors");
app.use(cors());

app.use(express.json());

// Cycle through models to ensure they are loaded before creating tables
const db = require("./models");

//Routers
const postRouter = require("./routes/posts");
app.use(express.json());
app.use("/posts", postRouter);

const commentRouter = require("./routes/comment");
app.use(express.json());
app.use("/comments", commentRouter);

db.sequelize.sync().then(() => {
  // API Endpoints would be defined here and where it starts listening
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
