const express = require('express');

const app = new express();

const port = 5000;

app.use(express.static('_dist'));

app.get('/hello', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log('Server started in port ' + port);
});