let express = require("express");
let expressHdbs = require("express-handlebars");
let PORT = process.env.PORT || 7777;
let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHdbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT,() => {
    console.log('Open Me on port:', PORT);
});
