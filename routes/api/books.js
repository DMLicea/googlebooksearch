// const express = require('express');

const router = require("express").Router();

const booksController = require("../../controllers/booksController");

// Matches with "/api/books"

router.route("/")

  // .get(booksController.findAll)

// Matches with "/api/books/:id"
router

  .route("api/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.route("api/books")


  .post(booksController.create)
  .get(booksController.findAll)


module.exports = router;