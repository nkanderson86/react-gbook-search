// setting up homepage by deconstructing the Component object from React
import React, { Component } from "react";
// importing our other components 
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
// deconstrcutiong the Col, Row, and Container objects from Grid
import { Col, Row, Container } from "../components/Grid";
// deconstructing List from List
import { List } from "../components/List";

// setting up a new class which extends the Component object from React 
class Home extends Component {
  // setting up initial state in order to change it later and let our page know that it needs to update the UI.  Books is an empty array at the moment, our search term  q is an empty string, and the message is a placeholder.
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // handle input change to take whatever field is being passed by an event, ie: on the form search, and setting the new state to equal the value input.  This updates the name as the user is typing. 
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // function to hit our API.js file for get books and pass that the current value in the q field. 
  getBooks = () => {
    API.getBooks(this.state.q)
      // with the response, reset the value of the books with the data sent back from the api call
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // catch the case in which no results are returned so that the user gets feedback and doesn't think the site is just frozen or still trying
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // function to hit the getBooks function upon form submission on the UI 
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  // function to save book given an id
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    // hits saveBook endpoint with the requried information to create a new object in our collection and then calls getBooks function to return results with the newly saved book
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  // rendering our actual page
  render() {
    return (
      // setting up UI components by calling them from our modularized code in the components folder
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
          <Col size="md-12">
            {/* setting up a card with a form, for each field the handleInputChange will update the field value as the user inputs text, the handleSubmit function will handle the call once the user clicks search and the q is the updated search term */}
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {/* ternary operator here that sets if this.state.books.length is true, aka if there are serach results then display the reults and give the user a save button that will save the book for the user.  if there are no results, display the message from above that informs the user  */}
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
