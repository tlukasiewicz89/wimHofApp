const db  = require('../models/userModel');

const breathController = {};

// get database
breathController.allUsers = (req, res, next) => {
    const query = 'SELECT * FROM "user"'
    db.query(query)
    .then(data => {
        console.log('data: ', data);
        res.locals.data = data.rows;
        return next();
    })
    .catch(err=>({error: err}))
}

// verify user for login
breathController.checkUser = (req, res, next) => {
    const {username, password} = req.body
    console.log('username:', username, 'password:', password)
    const query = `SELECT * FROM "user" WHERE username = $1 AND password = $2;`
    const queryParams = [username, password];
    db.query(query, queryParams)
    .then(data => {
        console.log('data.rows: ', data.rows);
        res.locals.data = data.rows;
        return next();
    })
    .catch(err=>({error: err}))

}


// updates the user Data when done with session
breathController.updateRecords = (req, res, next) => {
    const [username, newData] = req.body
    console.log('req.body', req.body)
    const string = JSON.stringify(newData);
    const query = `UPDATE "user" SET records = $2 WHERE username = $1;`
    const params = [username, string]
    db.query(query, params)
        .then(data => {
            console.log('returned from patch request', data)
            return next();
        })
        .catch(err=>({error: err}))
    
}

// UPDATE "user" SET password = 'qwert' WHERE username = 'jsmith';


module.exports = breathController;