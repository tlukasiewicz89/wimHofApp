const path = require('path');
const express = require('express');
const storage = require('../storage.js');

const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/userModel')

const app = express();
const PORT = 3000;
mongoose.connect(process.env.MONGO_URI);
app.use(express.json());


// console.log('file is running')
// console.log('storage object is', storage)
// app.get('/', express.static(path.resolve(__dirname, '../signup.html')));

// app.get("/api", (req, res) => {
//   console.log('api page activated')
//   res.json({ message: "Hello from server!" });
// });

// app.get("/", (req, res) => {
//   console.log('homepage activated')
//   res.json({ message: "Hello from HomePage!" })
// })
app.post("/createUser", (req, res) => {
  console.log('/userCreator fetch started in server')
  
  if (req.body) {
    [username, password] = req.body;
    console.log('un', username, 'pw', password)
    //check if username exists
    if (storage[username]) {
      console.log('username already taken')
      return res.status(200).json('sorry')
    }

  }
  return res.status(200).json('hello')
  
})


app.post("/user", (req, res) => {
  // if (req.body) {
  //   [username, password] = req.body;
  //   if (username)
  //   console.log('un', username, 'pw', password)
  //   console.log("storage ", storage)
  //   if (storage[username][password]) {
  //     console.log("user found")
  //     return res.json("hello");
  //   } else res.json('sorry')
  // } 
  // return
  console.log('/user fetch started in server')
  
  if (req.body) {
    [username, password] = req.body;
    console.log('un', username, 'pw', password)
    //check if username exists
    if (storage[username]) {
      console.log('correct username')
      if(storage[username][password]){
        console.log('correct login')
        return res.status(200).json('hello')
      } 
    }

  }
  return res.status(200).json('sorry')
})




// app.get("/App", (req, res) => {
//   console.log('App page activated')
//   res.json({ message: "Hello from App!" })
// })

// app.get("/SignUp", (req, res) => {
//   console.log('SignUp page activated')
//   res.json({ message: "Hello from SignUp!" })
// })
// app.post('/signup', (req,res) => {
//   console.log('started signup???')
//   console.log(req.body)
// })







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