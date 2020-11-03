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
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {

  return Math.round(Math.random(1,10000)*1000,0)
}

app.post('/api/persons', jsonParser ,(request, response) => {
  const body = request.body

  let fndper = persons.find(bname => bname.name === body.name)

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }


  if (fndper) {
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
    
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})