const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db/db.js');
const generateData = require('./db/dummy-data.js');
const app = express();
const port = 3001;

app.use(morgan());
app.use(bodyParser());
app.get('/', (req, res) =>
{
  generateData();
  res.send('Hello World!');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))