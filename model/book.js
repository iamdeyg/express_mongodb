const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    max: [2022, "Year must be less than or equal to 2022"],
  },
  isbn: {
    type: String,
    required: true,
    unique: [true, "ISBN must be unique"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Books", BookModel);
