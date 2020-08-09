import React, { useState, useEffect } from 'react'
import Countries from './/components//Countries'
import Country from './/components//Country'

import axios from 'axios'

const Filter = ({theFilter,theHandler}) =>{
	return(<div><table><td>find the countries</td><td><input value={theFilter} onChange={theHandler}/></td></table></div>)
}



const App = () => {
  const [ countries, setCountries ] = useState([])


  const hook = () =>{
  	console.log('effect')
  	axios
  		.get('http:\/\/restcountries.eu\/rest\/v2\/all')
  		.then(response =>{
  			console.log('promise fulfilled')	
  			setCountries(response.data)
  		})

  }

  useEffect(hook, [])
  
  
  const [filter, setFilter] = useState('')

  
 

	const handleFilterChange = (event) =>{
  		console.log( "the filter: ",filter)
  		setFilter(event.target.value)
  }

const countriesToShow = filter.length > 0 ? countries.filter( c => c.name.toUpperCase().includes(filter.toUpperCase())) : countries

const Final = () => {

	if(countriesToShow.length > 10){
		return(<div>Too many matches, specify another filter</div>)	
	}
	else if (countriesToShow.length == 1){
		return (<Country theCountry = {countriesToShow[0]} />)
	}
	else
	{
		return(<div><Countries theCountries = {countriesToShow} /></div>)
	}
	

}
  return (
    <div>
      

      <Filter theFilter ={filter} theHandler = {handleFilterChange}/>
      <Final />
  		
    </div>
  )
}

export default App