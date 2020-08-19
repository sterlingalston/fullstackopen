import React, { useState, useEffect } from 'react'
import Persons from './/components//Persons'
import axios from 'axios'
import personService from './/services//persons'

const Filter = ({theFilter,theHandler}) =>{
	return(<div><table><td>filter shown with</td><td><input value={theFilter} onChange={theHandler}/></td></table></div>)
}

const PersonForm = ({submitHandler,nameValue,phoneValue,nameHandle,phoneHandle}) => {
	return(	<form onSubmit = {submitHandler}>

		
		        <div>
        <table>
          <tr><td>name:</td> <td><input id="theinput" value={nameValue} onChange = {nameHandle}/></td></tr>
          <tr><td>number:</td><td> <input value={phoneValue} onChange = {phoneHandle}/></td></tr>
      </table>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    
    </form>)
}



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone:'040-1234567' }
  ])

const hook = () => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
        
  }

   useEffect(hook, [])

  
  
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

  const handlePersonDelete = (event) =>{
  	let namer = event.target.parentNode.getAttribute('name')
  	let pid_to_delete = persons.find(p => p.name == namer ).id
  	
  	if(window.confirm("Delete "+ namer + "?"))
  	{

	  	console.log('deleted',namer, pid_to_delete)
	  	personService.deleter(pid_to_delete).then(updatePersons => {
	        hook()
	      })
        
  	}
  }

  const addName = (event) =>{
  		event.preventDefault()
  		
  		if(persons.filter(p => p.name == newName.name).length)

  			{
  				alert(`${newName.name} is already added to phonebook`)
  				setNewName({name: '', phone: ''})
  			}
  		else
  			{
  	

				    personService.create(newName)
        			.then(returnedPersons => {
        			setPersons(persons.concat(returnedPersons))
				      })    
  				
  			}
  			
  		
  }

const personsToShow = filter.length > 0 ? persons.filter( p => p.name.substr(0,filter.length).toUpperCase() == filter.toUpperCase()) : persons



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter theFilter ={filter} theHandler = {handleFilterChange}/>
    
      <h3>add a new</h3>

      <PersonForm submitHandler= {addName} nameValue = {newName.name} nameHandle = {handleNameChange} phoneValue = {newName.phone} phoneHandle = {handlePhoneChange} />

      <h3>Numbers</h3>
      
      <div><Persons thePeople = {personsToShow} delHandle = {handlePersonDelete}/></div>
    </div>
  )
}

export default App