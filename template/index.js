require('dotenv').config()

const express = require('express')
const app = express()
const Person = require('./models/person')
//const morgan = require('morgan')
//const morganBody = require('morgan-body')

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

//morganBody(app)

//morgan.token('body', function (req, res) { return JSON.stringify(req.body) })

//logging
//app.use(morgan(':method :url :status :response-time ms :body'))

const cors = require('cors')

app.use(cors())

app.use(express.static('build'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(ppl => {

    res.json(ppl)
  })
})

app.get('/info', (req, res) => {
  Person.count({}).then(cnt => {
      res.send(`<p>Phonebook has info for ${cnt} people</p>
    <p>${new Date()}</p>`)
  })

})

app.get('/api/persons/:id', (request, response) => {


  Person.findById(request.params.id).then(note => {
    response.json(note)
  })

})


app.delete('/api/persons/:id', (request, response) => {
    const id = String(request.params.id)
    Person.deleteOne({_id:`${id}`}, person => response.json(person))
})

const generateId = () => {

  return Math.round(Math.random(1,10000)*1000,0)
}

app.post('/api/persons', jsonParser ,(request, response) => {
  const body = request.body
  let fndper = false
  
  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  const qry_person_fnd = Person.where({ name: `${body.name}` })
  
  qry_person_fnd.findOne((err, p_fnd) => {

    try
    {
      console.log('p_fnd == body', p_fnd.name == body.name)
      fndper = body.name == p_fnd.name

      if (fndper) {
        return response.status(400).json({ 
          error: 'name must be unique' 
        })
      }
    }
    
    catch(err){
      console.log(`${body.name} looks like it's unique!`)
       const person = new Person({
    
        name: body.name,
        number: body.number
      
      })

      person.save().then(savedPerson => {
        response.json(savedPerson)
      })
    }

  })
  


})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})