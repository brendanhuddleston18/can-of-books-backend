const mongoose = require('mongoose');
require('dotenv').config();

const Book = require('./models/books.js');

mongoose.connect( process.env.MONGODB_URL);

async function seed(){
  const bloodMeridian = new Book ({
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    description: "Based on historical events that take place on the Texas-Mexico border",
    status: "Zach's top five!"
  });

  const sisterOutsider = new Book ({
    title: "Sister Outsider",
    author: "Audre Lorde",
    description: "Collection of black queer feminist essays",
    status: "Zach's top five!"
  })

  const clash = new Book ({
    title: "The Clash of Fundamentalisms",
    author: "Tariq Ali",
    description: "An overview of Islamic history leading into American Imperialism",
    status: "Required Reading"
  });

  try {
    await bloodMeridian.save();
    console.log("Saved");
    await sisterOutsider.save();
    console.log("Saved");
    await clash.save();
    console.log("Saved");
  } catch(e){
    console.error(e.message);
  }
  mongoose.disconnect();
}

seed();