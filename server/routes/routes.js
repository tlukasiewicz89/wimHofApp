const express = require('express');
const breathController = require('../controllers/breathController')
const router = express.Router();

router.get('/test', (req, res) => {
    console.log('test');
    res.status(200).json('hello')
})

// route to get entire DB for testing purposes
router.get('/getAll', breathController.allUsers, (req, res) => {
    res.status(200).json(res.locals.data);
} )

// route for checking username and PW
router.post('/checkUser', breathController.checkUser, (req, res) => {
    res.status(200).json(res.locals.data)
})

// route for creating a new user
    // if username exists send back data 
    //if username doesnt exists then do an insert command

    

// route for saving sessions 
router.post('/updateRecord', breathController.updateRecords, (req, res) => {
    res.status(200).json(res.locals)
})

//route for deleting data

module.exports = router;