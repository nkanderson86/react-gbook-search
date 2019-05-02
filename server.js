// require pulls in two packages, express and mongoose to set up our server and database. routes points to our routes folder and has express look there for the routing of the website.  lastly PORT sets up an or statement to use either our .env  file in production or local host in development to run the code
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// This chunk sets up the middleware to handle JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This tells express where to look for the static files when in production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// tells express to look in the routes folder
app.use(routes);

// sets up our mongodb with an or statement to use either our live production version or local version depending on the environment 
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// sets up our app listener on the correct PORT
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
