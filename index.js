let express = require('express')
let bodyParser = require('body-parser')
let app = express()

// Include JSON parsing!
app.use(bodyParser.json())

let errorMiddleware = function(error, request, response, next) {
  console.log("Error")
}

app.use(errorHandler)

let catRouter = require('./cat/router')
app.use(catRouter)

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/tyler', {useNewUrlParser: true} )

database = mongoose.connection
database.on("open", ()=> {
  console.log("Connected")
})


app.listen(9000)