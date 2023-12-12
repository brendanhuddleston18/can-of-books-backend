"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const Book = require("./models/books.js");

const app = express();
app.use(cors());
app.use( express.json());

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URL);


async function addBooks(request, response) {
  let book = request.body;
  try {
    let addedBook = await Book.create(book);
    response.status(200).send(addedBook);

  } catch(e){
    console.err("Error adding books:", e);
    response.status(500).json({err :"Internal Server Error"})
  }
  // console.log("Book:", book);
  // console.log("Added Book:", addedBook);
}

async function handleGetBooks(request, response) {
  try {
    const books = await Book.find();
    response.status(200).json(books);
    console.log(book);
  } catch (e) {
    console.error("Error getting books:", e);
    response.status(500).json({ err: "Internal Server Error" });
  }
}
app.get("/books", handleGetBooks);
app.post("/books", addBooks);

app.get("/test", (request, response) => {
  response.send("test request received");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
