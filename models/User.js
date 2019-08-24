const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: string,
  password: string,
  linkedinID: string,
  picture: string,
  likes: []
})



const User = mongoose.model('User', userSchema)


module.exports = User;