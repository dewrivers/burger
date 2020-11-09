
let express = require("express");
let router = express.Router();
let burger = require("../models/burger");

/* get route -> index */
router.get("/", (req, res) => {
  res.redirect("/burgers");
});
/* express-callback response by calling burger.all(data) */
router.get("/burgers", (req, res) => {
  burger.all((data) => {
    /* wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar */
    res.render("index", { burger_data: data });
  });
});

/* post route -> back to index */
router.post("/burgers/create", (req, res) => {
  // takes the request object using it as input for burger.addBurger
  burger.insertOne(req.body.burger_name, (result) => {
    console.table(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
    console.log("Condition: ", condition);

  burger.updateOne(req.params.id, (result) => {
    
    /* Send back response and let page reload from .then in Ajax */
    res.sendStatus(200).end();
  });
});

module.exports = router;


