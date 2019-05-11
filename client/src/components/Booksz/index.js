
import React from "react";
import { FormBtn } from "../components/BookForm";
import {List } from "../components/BookList";
import { Col, Row } from "../components/Grid";

function Booksz(props) {
  return (
    <List as="ul">
      {props.books.map((book) => (
        <List.Item as="li" key={book.googleId}>
          <Row className="book-list__header">
            <Col md={8}>
              <h3 className="book__title">{book.title}</h3>
              {book.subtitle !== undefined && book.subtitle.length > 0 && (
                <h5 className="book__subtitle">{book.subtitle}</h5>
              )}
            </Col>
            <Col md={4} className="book-list__btn-container">
              <div className="btn-container">
                <FormBtn
                  as="a"
                  variant="secondary"
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow"
                >
                  View
                </FormBtn>
                {props.action === 'save' && (
                  <FormBtn
                    onClick={() => props.handleBookAction(book)}
                    variant="primary"
                    className="ml-2 shadow"
                  >
                    Save
                  </FormBtn>
                )}
                {props.action === 'delete' && (
                  <FormBtn
                    onClick={() => props.handleBookAction(book._id)}
                    variant="danger"
                    className="ml-2 shadow"
                  >
                    Delete
                  </FormBtn>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p className="book-list__authors">
                Written by {book.authors.join(', ')}
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} md={2}>
              <img
                src={book.image}
                alt={book.title}
                className="book-list__thumbnail img-thumbnail img-fluid w-100"
              />
            </Col>
            <Col xs={12} sm={8} md={10}>
              <p className="book-list__description">{book.description}</p>
            </Col>
          </Row>
        </List.Item>
      ))}
    </List>
  );
}

export default Booksz;