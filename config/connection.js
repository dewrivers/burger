let mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password777",
  database: "burgers_db"
});


connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err);
    return;
  }
  console.log("I am Connected to MySQL!!👌🏽");
});

module.exports = connection;