import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookForm from "../components/BookForm";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Booksz from "../components/Booksz";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  // searches the GoogleBooks API storing the data in books array
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // once the search term is submitted, search the GoogleBooks API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  // deletes book from database
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  // saves book to database
  handleSaveBook = bookData => {
    // console.log(bookData);
    API.saveBook(bookData)
      .then(res => alert("You have saved this book!"))
      .catch(err => console.log(err));
  };

  render() {
    
    return (
      
      <Container>
        
        <Row>
          
          <Col size="md-12">
            
            <Jumbotron />
          
          </Col>
        
        </Row>
        
        <Row>
          
          <Col size="md-12">
            
            <Card heading="Google Books Search">
              
              <BookForm
                
                value={this.state.search}
                
                handleInputChange={this.handleInputChange}
                
                handleFormSubmit={this.handleFormSubmit}
              
              />
            
            </Card>
          
          </Col>
        
        </Row>
        
        <Row>
          
          <Col size="md-12">
            
            {this.state.books.length ? (
              
              <Card heading="Results">
                
                {this.state.books.map(book => (
                  
                  <Booksz
                    
                  key={book.id}
                    
                  src={book.volumeInfo.imageLinks 
                      
                    ? book.volumeInfo.imageLinks.thumbnail
                      
                    : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"}
                    
                    title={book.volumeInfo.title}
                    
                    author={book.author}
                    
                      date={book.volumeInfo.publishedDate}
                    
                      description={book.volumeInfo.description}
                    
                      link={book.volumeInfo.infoLink}
                    
                      handleSaveBook={() => this.handleSaveBook({ 
                    
                        title: book.volumeInfo.title,
                      
                        src: book.volumeInfo.imageLinks 
                        
                        ? book.volumeInfo.imageLinks.thumbnail 
                        
                        : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                      
                        author: book.volumeInfo.author,
                      
                        date: book.volumeInfo.publishedDate,
                      
                        description: book.volumeInfo.description,
                      
                        link: book.volumeInfo.infoLink})}
                  
                  />
                
                ))}
              
              </Card>
            
            ) : (
              
              <Card heading="Search Results"></Card>
            
            )}
          
          </Col>
        
        </Row>
      
      </Container>
    
    );
  
  }

}

export default Books;