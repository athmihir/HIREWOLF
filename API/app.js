const express = require('express');
const cors = require('cors');

var userRouter = require('./routes/userRouter');

var app = express();

app.use(cors());

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`)
  })

module.exports = app;
