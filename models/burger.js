var orm = require("../config/orm.js");
var burger = {

  // selecting all burgers
    all: function(cb) {
      orm.all("burger", function(res) {
        cb(res);
      });
    },
    
    // creating new burger
    create: function(cols, vals, cb) {
      orm.create("burger", cols, vals, function(res) {
        cb(res);
      });
    },

    // updating burger
    update: function(objColVals, condition, cb) {
      orm.update("burger", objColVals, condition, function(res) {
        cb(res);
      });
    },

    // deleting burger
    delete: function(condition, cb) {
      orm.delete("burger", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;