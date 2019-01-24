let mongoose = require('mongoose')
let schema = require('./schema')

let Cat = mongoose.model('Cat', schema)

module.exports = Cat