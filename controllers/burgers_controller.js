let express = require('express');

let ruta = express.Router();
let burger = require('../models/burger');

/** get_route -> index.html ('/') */
ruta.get('/', (req, res) => {
     res.redirect('/burgers');
});

/** ▽ creating the routes ▽ */
ruta.get('/bugers', (req, res) => {
    burger.selectAll((burgerData) => {
       res.render('index',{
           burger_data: burgerData
       });
    });
});

ruta.post('/burgers/create', (req, res) => {
    burger.create(req.body.bueger_name, (result)=>{
         console.log(result);
         res.redirect('/');
    });
});

ruta.put('/burgers/:id', (req, res) => {
    burger.update(req.params.id, (result)=>{

        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = ruta;


