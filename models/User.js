const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  // linkedinID: String,
  // picture: String,
  // likes: []
})



const User = mongoose.model('User', userSchema)


module.exports = User;

