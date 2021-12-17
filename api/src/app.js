const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
console.log("fv")

app.listen(process.env.APP_PORT);