 /*Requiring the orm.js file*/
 let orm = require("../config/orm");

 /* Calling the ORM function using burger input for the  */
const burger = {
  all: (callback) => {
    orm.all("burgers", (res) => {
      callback(res);
    });
  },
  insertOne: (name, callback) => {
    orm.insertOne("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], callback);
   
  },
  updateOne: (id, callback) => {
    var condition = "id=" + id;
    orm.updateOne("burgers", {
      devoured: true
    }, condition, callback);
  }
  
};

module.exports = burger;
