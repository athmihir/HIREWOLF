const express = require('express');
const cors = require('cors');

var userRouter = require('./routes/userRouter');
const port = 4000
var app = express();

app.use(cors());

app.use('/user', userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`)
  })

module.exports = app;
