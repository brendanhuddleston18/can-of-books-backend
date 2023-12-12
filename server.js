'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Books = require('./models/books.js');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
mongoose.connect( process.env.MONGODB_URL );

app.get('/books', handleGetBooks);

async function handleGetBooks( request, response){
  const books = await Books.find();
  response.status(200).json(books)
}

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
