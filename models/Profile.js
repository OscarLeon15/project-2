const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    username: String,
    name: String,
    favoriteLeague: String,
    favoriteTeam: String,
    picture: { type: String, default: 'https://res.cloudinary.com/alejotsv/image/upload/v1567385712/no-avatar.png' }
}, {
    timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema)
//mongoose expects the name of the model to be singular and have a capital first letter
//name of the collection in DB will be called profiles with lower case P because mongoose will do it by magic

module.exports = Profile;