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
 try{
   const books = await Books.find();
    response.status(200).json(books)
    console.log(books);
   
} catch(e) {
  console.error('Error getting books:', e);
  response.status(500).json({err: 'Internal Server Error'});
}
}

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
