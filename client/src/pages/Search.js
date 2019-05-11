import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/BookForm";
import Jumbotron from "../components/Jumbotron";
import Booksz from '../components/Booksz';

class Search extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        description: ""
      };
    
      componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };
    
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };
    render() {

        return(
    
    <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search For A Book</h1>
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
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
           
        </Row>

<Row>
<Col md={12}>
      <h3>
        <strong>
         Results
        </strong>
      </h3>

      {!this.state.books.length ? (
        <h2 className="text-center">Search for a Book to Begin!</h2>
      ) : (
        <Booksz
          books={this.state.books}
          handleBookAction={this.handleBookAction}
          action={this.state.action}
        />
      )}

</Col>
</Row>

</Container>

    );
  }}



export default Search;