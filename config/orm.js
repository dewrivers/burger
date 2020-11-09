/** Import require("./connection"); into orm.js */
let connection = require("./connection");


/*Helper arrow function loops through and creates an array of question marks 
 and turns it into a string. ["?", "?", "?"].toString() => "?,?,?"; */
const make_Q_marks = (num) => {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  /** Return the array to a string*/
  return arr.toString();

}
 
/* Helper arrow function to convert object key/value pairs to SQL syntax loop through the keys and push the value as a string into an array*/
const objToSql = (ob) => {
  let arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

/*These methods are use in order to retrieve and store data in to database.*/
var orm = {
  all: (tableInput, callback) => {
    var QString = "SELECT * FROM " + tableInput + ";";
    connection.query(QString, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
      console.table(result);
    });
    
  },
  
  
  /* We want to insert the values into the columns*/
  insertOne: (table, columns, values, callback) => {
    var QString = "INSERT INTO " + table + " (" + columns.toString() + ") "
    + "VALUES (" + make_Q_marks(values.length) + ") ";

    console.table(QString);
    
    connection.query(QString, values, (err, results) => {
      if (err) { throw err }
      //console.table(results);
      callback(results);
      
    });
  },

  /* Columns and Values that we want to update */
  updateOne: (table, objColVals, condition, callback) => {
    var QString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;

    console.log(QString);
    
    connection.query(QString, (err, results) => {
      if (err) {
        throw err;
      }
      callback(results);
      console.table(results);
    });
  }
};

module.exports = orm;
