let express = require('express');

let ruta = express.Router();
var burger = require('../models/burger');

/** get_route -> index.html ('/') */
ruta.get('/', (req, res) => {
     res.redirect('/burgers');
});

ruta.get('/bugers', (req, res) => {
    burger.selectAll((burgerData) => {
       res.render('index',{
           burger_data: butgerData
       });
    });
});




