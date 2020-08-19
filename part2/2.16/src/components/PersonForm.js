
import React, { useState } from 'react'

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone:'040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState({name: '', phone: ''})

  const handleNameChange = (event) =>{
      console.log(event.target.value)
      setNewName({name: event.target.value, phone: newName.phone})
  }

  const handlePhoneChange = (event) =>{
      console.log(event.target.value)
      setNewName({name: newName.name, phone: event.target.value})
  }

  const addName = (event) =>{
      event.preventDefault()
      
      if(persons.filter(p => p.name == newName.name).length)

        {// console.log("this is true")
          alert(`${newName.name} is already added to phonebook`)
        }
      else
        {
          //console.log("this is false")
          setPersons(persons.concat(newName))
        }
        setNewName({name: '', phone: ''})
      
  }


const PersonForm = () =>{
	return(
		      <form onSubmit = {addName}>
        <div>
        <table>
          <tr><td>name:</td> <td><input id="theinput" value={newName.name} onChange = {handleNameChange}/></td></tr>
          <tr><td>number:</td><td> <input value={newName.phone} onChange = {handlePhoneChange}/></td></tr>
      </table>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
		)
}

export default PersonForm