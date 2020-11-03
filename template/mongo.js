const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const dbnamer = 'phone-app'
const password = process.argv[2]
const namer = process.argv[3]
const phoner = process.argv[4]
//qW4d5L1tQFeLcG2U

const url =
  `mongodb+srv://fullstack:${password}@cluster0.x84w7.mongodb.net/${dbnamer}?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


const PersonSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', PersonSchema)


const person = new Person({
  name: namer,
  phone: phoner
})

person.save().then(result => {
  console.log(`add ${namer} number ${phoner} to phonebook`)
  Person.find({}).then(result => {
  console.log(result)
  result.forEach(phone_rec => {
    console.log(phone_rec)
  })
  mongoose.connection.close()
})
  
})


/*
Person.find({}).then(result => {
  console.log(result)
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})  */