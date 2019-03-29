var mysql = require('mysql');

var connection = mysql.createConnection({
  database:'deepfryd',
  user: "root"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;