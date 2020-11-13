let mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else { 
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password777",
    database: "burgers_db"
  });
}



connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err);
    return;
  }
  console.log("I am Connected to MySQL!!👌🏽");
});

module.exports = connection;