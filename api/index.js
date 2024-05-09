import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect("mongodb+srv://rohit:rohit@mern-estate.2rbwhit.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=mern-estate")
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
)
