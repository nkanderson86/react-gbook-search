// setting up a new instance of the Router() method, adding the controller reference to pull in database calls that are defined in the bookController.js file.
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// setting up a get and post route for the root url
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// setting up get, put, & delete routes for updating our books table in the database and passing in the id parameter as a condition for our database queries. 
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

// exporting to make available to rest of code
module.exports = router;
