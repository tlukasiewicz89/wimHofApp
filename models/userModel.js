const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
* Hint: Why is bcrypt required here?
*/

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  retentionTimes: {type: [String]}

});

const User = mongoose.model('User', userSchema);

module.exports = User;
