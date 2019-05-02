// setting up a new instance of the Router() method and requiring googleController.js file to set up making a database call when our api route is hit.
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// setting up api call that will hit the googleController.js file to fire off an axios call to retreive books for the website.
router
  .route("/")
  .get(googleController.findAll);

// exporting to make available to rest of code
module.exports = router;
