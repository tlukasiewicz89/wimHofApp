const db  = require('../models/userModel');

const breathController = {};

// get database
// 

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

//to update a users ...data
// UPDATE "user" SET password = 'qwert' WHERE username = 'jsmith';


module.exports = breathController;