import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();



// MongoDB connection string
const MONGO_URI = process.env.MONGO;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});



const app = express();

app.listen(3000, ()=>{
    console.log("Server started at 3000 port");
})