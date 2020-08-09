import React, { useState } from 'react'
import Country from './Country'
  	
  

  const Countries = ({theCountries}) =>{
  	
 	const [onecountry, setOneCountry] = useState(false)
 	const [oneName, setOneName] = useState(false)


  const handler = (name) =>{
  	setOneCountry(true)
  	setOneName(name)
  	
  	
  }	
 	if(onecountry){
 		return (<div><Country theCountry = {theCountries.filter(c => c.name == oneName)[0]} /></div>)
 	}
 	else{
  	
  	return (<div><ul>{theCountries.map(c => <li key={c.name}> {c.name} <button onClick = {() => handler(c.name) }>show</button></li>)
  		}</ul></div>)
  	}

  }

  export default Countries