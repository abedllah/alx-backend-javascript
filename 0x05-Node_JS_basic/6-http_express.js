const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
});

app.listen(1245, () => {
  console.log('listening on http://localhost:1245');
});

module.exports = app;