/* importing the connection.j into orm.js */
let connection = require('./connection');

/* The next helper arrow function loops through and creates an array of question marks and turns it into a string. ["?", "?", "?"].toString() => "?,?,?"; */
const makeQuestionMarks = (num) => {
    let arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

/* The next helper arrow function to convert object key/value pairs to SQL syntax and
loops through the keys and push the key/value as a string into an array */
const objToSql = (object) => {
   let arr = [];

   for (var key in object) {
       arr.push(key + '=' + object[key]);
   }
   return arr.toString();
}

let orm = {
    /* selectAll from the burgers table mysql Query*/
   selectAll: (tableInput, callback) => {
     var Qstring = 'SELECT * FROM' + tableInput + ';';
     connection.query(Qstring, (err, res) => {
         if (err) {
             throw err;
         }
         callback(result);
     });
   },
    /* INSERT into the burgers table mysql Query*/
   insertOne: (table, columns, values, callback) => {
       var Qstring = 'INSERT INTO' + table;

       Qstring += ' (';
       Qstring += columns.toString();
       Qstring += ')';
       Qstring += ' VALUES (';
       Qstring += makeQuestionMarks(values.length);
       Qstring += ') ';

       console.log(Qstring);

       connection.query(Qstring, values, (err, result) => {
           if (err) {
               throw err;
           }
           callback(result);
       });
   },
   
   updateOne: (table, objColVals, condition, callback) => {
       var Qstring = 'UPDATE' + table;

       Qstring += ' SET ';
       Qstring += objToSql(objColVals);
       Qstring += ' WHERE ';
       Qstring += condition;

       console.log(Qstring);
       connection.query(Qstring, (err, result) => {
           if (err) {
               throw err;
           }
           callback(result);
       });
   }

};


module.exports = orm;