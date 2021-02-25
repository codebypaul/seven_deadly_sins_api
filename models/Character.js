const mongoose = require('mongoose')

const abilitySchema = new mongoose.Schema({
    name :String,
    description: String
})

const characterSchema = new mongoose.Schema({
    name: String,
    race: String,
    gender: String,
    birthday:String,
    height: String,
    weight:String,
    hairColor: String,
    eyeColor: String,
    bloodType: String,
    affiliation: String,
    weapons: [String],
    abilities: [abilitySchema],
    imgUrl: String,
    order:String
})

module.exports = mongoose.model('Character', characterSchema)
