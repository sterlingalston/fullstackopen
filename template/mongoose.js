const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const dbnamer = 'note-app'
const password = process.argv[2]
//qW4d5L1tQFeLcG2U

const url =
  `mongodb+srv://fullstack:${password}@cluster0.x84w7.mongodb.net/${dbnamer}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/*
const note = new Note({
  content: 'Three is a magic number!',
  date: new Date(),
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/
Note.find({}).then(result => {
  console.log(result)
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})