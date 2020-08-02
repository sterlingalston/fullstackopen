import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) =>{
  		console.log(event.target.value)
  		setNewName(event.target.value)
  }

  const addName = (event) =>{
  		event.preventDefault()
  		
  		if(persons.filter(p => p.name == newName).length)

  			{//	console.log("this is true")
  				alert(`${newName} is already added to phonebook`)
  			}
  		else
  			{
  				//console.log("this is false")
  				setPersons(persons.concat({name: newName}))
  			}
  			setNewName('')
  		
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input id="theinput" value={newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(p => <li key={p.name}> {p.name} </li>)}</ul>
    </div>
  )
}

export default App