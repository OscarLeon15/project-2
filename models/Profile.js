const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: String,
    favoriteTeams: [],
    picture: String    
})

const profileModel = mongoose.model('Profile', profileSchema)
//mongoose expects the name of the model to be singular and have a capital first letter
//name of the collection in DB will be called profiles with lower case P because mongoose will do it by magic

module.exports = profileModel;