let orm = require('../config/orm');

let burger = {
    selectAll: (callback) => {
       orm.selectAll('burgers', (res) => {
           callback(res);
       }) ;
    },

    insertOne: (name, callback) => {
     orm.insertOne('burgers',
     ['burger_name', 'devoured'], 
     [name, false], callback);

    },

    updateOne: (id, callback) => {
      var condition = 'id=' + id;
      orm.updateOne('burgers', {
          devoured:true
      }, conditions, callback);

    }
};

module.exports = burger;