import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/BookList";
import { Input, TextArea, FormBtn } from "../components/BookForm";
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
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
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
          </Col>
        </Row>
      </Container>

    );
  }}
export default Saved;