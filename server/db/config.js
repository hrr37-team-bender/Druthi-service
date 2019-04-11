var mysql = require('mysql');

module.exports = mysql.createConnection({
  database:'imageCarousel',
  user: "root"
});

