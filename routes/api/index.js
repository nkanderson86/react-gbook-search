// requiring the necessary things to continue building our api routes

const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");


// setting up the next level of our route, for each route that has /api... if it's followed by /books look into books.js file and if it's followed by /google look into google.js
router.use("/books", bookRoutes);

router.use("/google", googleRoutes);

module.exports = router;
