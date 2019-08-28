
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    country: String,
    players: [],
    image: String,
    squad: [],
})



const teamModel = mongoose.model('Team', teamSchema)
//mongoose expects the name of the model to be singular and havea capital first letter
//name of the collection in DB will be called celebrities with lower case C because mongoose will do it by magic



module.exports = teamModel;