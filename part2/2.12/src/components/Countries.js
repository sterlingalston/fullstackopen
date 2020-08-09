import React, { useState } from 'react'

  const Countries = ({theCountries}) =>{
  	
  	return (<div><ul>{theCountries.map(c => <li key={c.name}> {c.name}</li>)
  		}</ul></div>)

  }

  export default Countries