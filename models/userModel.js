const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
* Hint: Why is bcrypt required here?
*/
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  retentionTimes: {type: Mixed}

});

const User = mongoose.model('User', userSchema);

module.exports = {
  User, 
  SALT_WORK_FACTOR,
  bcrypt
};