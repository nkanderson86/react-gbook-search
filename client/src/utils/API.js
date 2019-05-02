// importing axios to setup API calls
import axios from "axios";


export default {
  // setting up getBooks function to use axios to hit the /api/google/q where q is a parameter fed to the function and sets the rest of the url equal to "title:*user input*"
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // setting up getSavedBooks function to use axios to hit the /api/books endpoint 
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // setting up deleteBook function to use axios to hit the /api/books/id where id is a parameter fed to the function and sets the condition for which book will be deleted
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  //  setting up saveBook function to use axios to hit the /api/books endpoint where bookData is a parameter fed to the functino as an object and is stored to our collection by the POST route used.
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
