let mongoose = require('mongoose')

let CatSchema = new mongoose.Schema({
  name: String,
  age: Number
})

module.exports = CatSchema