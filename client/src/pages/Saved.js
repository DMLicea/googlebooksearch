import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/BookList";
import Jumbotron from "../components/Jumbotron";

class Saved extends Component {
  constructor(props) {
    super(props);

    this.loadBooks = this.loadBooks.bind(this);
    this.handleBookAction = this.handleBookAction.bind(this);

    this.state = {
      pageTag: 'Your Saved Books of Interest',
      action: 'delete',
      books: []
    };
  }

  /**
   * On successful rendering of the page, get all saved books from the
   * backend.
   */
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {

    API.getSavedBooks()

      .then((res) => {

        const bookList = res.data;

        this.setState({ books: bookList });

      })

      .catch((error) => console.log(error));
  }


  handleBookAction(id) {

    API.deleteBook(id)

      .then(() => this.loadBooks())

      .catch((error) => console.log(error));
  }

  /**
   * Render the page elements.
   */
  render() {
    return (
      <Container fluid>
        <Row>
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

        </Row>
      </Container>    
      )
  }};

export default Saved;