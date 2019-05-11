import React, { Component } from "react";
import API from "../utils/API";
import { Row, Container, Col } from "../components/Grid";
import Card from "../components/Card";
import Booksz from "../components/Booksz";
// import { Link } from "react-router-dom";


class Saved extends Component {
  state = {
    books: []
  };

  // grab the books from /api/books

  componentDidMount() {

    API.getBooks()
      
    .then(res => this.setState(
        
      { 
          books: res.data 
      },
        console.log(res.data)
        )
      )
      .catch(err => console.log(err));
  }

  // loads all books
  
  loadBooks = () => {
    
    API.getBooks()
      
    .then(res =>
        
      this.setState({ books: res.data })
      
      )
      .catch(err => console.log(err));
  
    };

  // deletes a book
  handleDeleteBook = id => {
    
    API.deleteBook(id)
      
    .then(res => this.loadBooks())
      
    .catch(err => console.log(err));
  
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Saved Books">
                {this.state.books.map(book => (
                  <Booksz
                    key={book._id}
                    src={book 
                      ? book.src 
                      : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"}
                    title={book.title}
                    authors={book.authors.join(", ")}
                    date={book.date}
                    description={book.description}
                    link={book.link}
                    handleDeleteBook={() => this.handleDeleteBook(book._id)}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Saved Books"></Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;