const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: string,
  password: string,
  email: string
})



const User = mongoose.model('User', userSchema)


module.exports = User;