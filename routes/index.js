
// reruire path and router packages to help set up our routes.  additionally, brining in the api folder that contains our api routes
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// using router here to add the /api into the url and look into the api folder for the rest of each specific route
router.use("/api", apiRoutes);

// router call back function inside of .use to join our static directory with the route in quotes
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// export router to make available to the rest of the code
module.exports = router;
