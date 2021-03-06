var burger = require("../models/burger.js");

var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});

// post burger to the webpage displaying the name, and seeing if devoured or not 
router.post("/api/burger", function (req, res) {
  burger.create([
    "burger_name", "devour"
  ], [
    req.body.burger_name, req.body.devour
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//update burgers devoured state 
router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update({
    devour: req.body.devour
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;