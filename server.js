let express = require('express');
let expresshandlebars = require('express-handlebars');

let PORT = process.env.PORT || 36900;
let app = express();

app.use(express.static('publlic'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine('hbs', expresshandlebars({
    defaultLayout: 'main'}));
app.set('view engine', 'hbs');
let rutas = require('./controllers/bugers_controllers');
//let rutas = require('./controllers/bugers_controllers.js');
app.use(rutas);

app.listen(PORT,function(){
    console.log('listening on port:%s', PORT);
});
