const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
require('dotenv').config();
const {User, bcrypt, SALT_WORK_FACTOR} = require('../models/userModel');

console.log()
mongoose.connect(process.env.MONGO_URI);
app.use(express.json());



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, './index.html'))
})


app.post('/signup', 
async(req, res, next)=>{
  const { username, password } = req.body
  console.log(req.body);
  const hashed = await bcrypt.hash(password, SALT_WORK_FACTOR);
  // hash the password with bcrypt
  // insert it into the database
  try {
    const result = await User.create({username: username, password: hashed});
    return next();
  }
  catch (err) {
    console.log("error", err);
  }
},
(req, res) => {  
  console.log('finished creating user')
  res.status(201).send({})
  // return res.sendFile(path.resolve(__dirname, './signup.html'))
  // console.log('req.body', req.body)
})







// unkown route handler
app.use((req, res) => {
    res.sendStatus(404);
    console.log('unknown route', res.statusCode);
  });

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log('errorObj', errorObj);
    return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}...`);
})

module.exports = app;