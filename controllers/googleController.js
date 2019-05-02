// brining in axios to set our api call to google books
const axios = require("axios");
const db = require("../models");

module.exports = {
  // setting up a findAll function that has a callback function.
  findAll: function (req, res) {
    // setting the req equal to the input from react on the front end, which will be whatever the user has typed into the search bar
    const { query: params } = req;
    // using axios to hit the google api and search for the input provided
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      // after hitting api, create a callback function called results and filter down the actual results from the search to the only the information we care about which are the fields like titles, infoLink, authors, etc... 
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // another callback function called apiBooks whcih hits our Book collection for everything it has and then filters from that list and it's here that I get a little bit confused. .. it looks to me like it might be looking for books in our database that are not in the google results and then returning that in addition to hits we get from the google api?  
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // and here we have our 4th!! .then fucntion that is a callback function to responsd with the JSON of the books we've filtered down to. if there is an error, line 37 sets up the error handling
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
