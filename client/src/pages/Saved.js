// importing react & components
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// setting up a compoenent class to display the user's saved books
class Saved extends Component {
  state = {
    books: []
  };

  // setting up a lifecycle function to make sure the component is ready before the page pulls the list of books to display
  componentDidMount() {
    this.getSavedBooks();
  }

  // function that sets up an API call to get the list of saved books 
  getSavedBooks = () => {
    API.getSavedBooks()
      // once res is returned from API call, update state of books array with the res.data
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // handling errors
      .catch(err => console.log(err));
  };

  // function that sets up an API call to delete book, that accepts the argument 'id' and then deletes the book where the id in the db collection matches the id of the book deleted on the UI 
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {/* ternary operator similar to the one on Home.js, shows a list of books if there is anything in the books array and shows No saved books if there isnt. */}
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
