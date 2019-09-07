const m = require('mongoose');

const Schema = m.Schema;

const ligaSchema = new Schema({
  area: {
    id: Number,
    name: String
},
    id: Number,  
    name: String,
    shortName: String,
    crestUrl: String,
    website: String,
    founded: Number,
    venue: String
})



const theLigaModel = m.model('League', ligaSchema)
//mongoose expects the name of the model to be singular and havea capital first letter
//name of the collection in DB will be called celebrities with lower case C because mongoose will do it by magic


module.exports = theLigaModel;