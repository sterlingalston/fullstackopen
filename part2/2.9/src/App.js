import React, { useState } from 'react'
import Persons from './/components//Persons'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone:'040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState({name: '', phone: ''})
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) =>{
  		console.log(event.target.value)
  		setNewName({name: event.target.value, phone: newName.phone})
  }

  const handlePhoneChange = (event) =>{
  		console.log(event.target.value)
  		setNewName({name: newName.name, phone: event.target.value})
  }

const handleFilterChange = (event) =>{
  		console.log( "the filter: ",filter)
  		setFilter(event.target.value)
  }

  const addName = (event) =>{
  		event.preventDefault()
  		
  		if(persons.filter(p => p.name == newName.name).length)

  			{//	console.log("this is true")
  				alert(`${newName.name} is already added to phonebook`)
  			}
  		else
  			{
  				//console.log("this is false")
  				setPersons(persons.concat(newName))
  			}
  			setNewName({name: '', phone: ''})
  		
  }

const personsToShow = filter.length > 0 ? persons.filter( p => p.name.substr(0,filter.length).toUpperCase() == filter.toUpperCase()) : persons



const Filter = () => {
	return(
			<div><table><td>filter shown with</td><td><input value={filter} onChange={handleFilterChange}/></td></table></div>
			
		)
}

  return (
    <div>
      <h2>Phonebook</h2>

      <div><table><td>filter shown with</td><td><input value={filter} onChange={handleFilterChange}/></td></table></div>
    
      <h3>add a new</h3>


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
      <h3>Numbers</h3>
      <div><Persons thePeople = {personsToShow} /></div>
    </div>
  )
}

export default App