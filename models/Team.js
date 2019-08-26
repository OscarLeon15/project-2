
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    players: Number,
    image: String,
    squad: [],
})



const teamModel = mongoose.model('Team', teamSchema)



module.exports = teamModel;