import React, { useState } from 'react'
import Weather from './Weather'
  const Country = ({theCountry}) =>{
  	
  	return (<div>
  			<h1>{theCountry.name}</h1>
  			<p></p>
  			<div>capital {theCountry.capital}</div>
  			<div>population {theCountry.population}</div>
  			<p></p>
  			<h2>languages</h2>
  			<p></p>
  			<ul>{theCountry.languages.map(l => <li key={l.name}> {l.name}</li>)  		}</ul>
  				<p></p>
  				<img src={theCountry.flag} alt="no flag to display" width="100" height="100" />
  			<p></p>
  			<h2>Weather in {theCountry.capital}</h2>
        <Weather theCity = {theCountry.capital}/>
  			</div>

  		)

  }

  export default Country