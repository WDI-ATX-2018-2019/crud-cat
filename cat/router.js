let express = require('express')
let router = express.Router()
let Cat = require('./model')

router.get('/', (request, response)=> {
  Cat.find((error, cats)=> {
    if(error) next(error)
    else response.json(cats)
  })

})

router.get('/:id', (request, response)=> {

})

router.post('/', (request, response)=> {
  let garfield = new Cat({name: "Garfield", age: 12})
  garfield.save((error, savedGarfield)=> {
    if(error) next(error)
    else response.json(savedGarfield)
  })
})

router.delete('/:id', (request, response)=> {
  let id = request.params.id
  Cat.findByIdAndRemove(id, (error, data)=> {
    if(error) next(error)
    else response.json({deleted: true})
  })
})

module.exports = router