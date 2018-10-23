var express = require("express");

var router = express.Router();

var burgerModel = require ("../models/burgerModel.js");


router.get("/", function(req, res){
  burgerModel.selectAll(function(data){
    var objectGet = {
      burgerData: data
    };
    console.log("burgersController.js Line 13");
    console.log(objectGet);
    res.render("index", objectGet);
  });
});

module.exports = router;

// #### Controller setup

// 1. Inside your `burger` directory, create a folder named `controllers`.

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`
// 4. Create the `router` for the app, and export the `router` at the end of your file.
