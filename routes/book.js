const express = require("express");
const BookModel = require("../model/book");

const bookRoute = express.Router();

//CRUD routes ==> CREATE, READ, UPDATE and DELETE
//READ
bookRoute.get("/", (req, res) => {
  BookModel.find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//READ BY ID
bookRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  BookModel.findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).send(err);
    });
});

//CREATE
bookRoute.post("/", (req, res) => {
  const book = req.body;
  console.log(book);

  BookModel.create(book)
    .then((book) => {
      res.status(201).send({
        message: "Book added successfully",
        data: book,
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//UPDATE
bookRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const book = req.body;
  BookModel.findByIdAndUpdate(id, book, { new: true })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

//DELETE
bookRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({
        message: "Deletion Successful",
        data: "",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

module.exports = bookRoute;
