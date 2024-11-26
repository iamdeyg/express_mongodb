const express = require("express");
const { connectToMongoDB } = require("./db");

const BookRoute = require("./routes/book");

require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

//connecting to mongoDB instance
connectToMongoDB();

app.use(express.json());
app.use("/books", BookRoute);

app.get("/", (req, res) => {
  res.send("Welcome Home");
});
app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});
