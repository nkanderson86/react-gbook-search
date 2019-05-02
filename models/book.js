// bring in the mongoose package and set up a new instance of the Schema method to set up database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// setting up a new schema to create a collection for our database
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// creating new collection and setting it equal to a variable called Book which we export below.
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
