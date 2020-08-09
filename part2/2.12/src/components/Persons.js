import React, { useState } from 'react'

  const Persons = ({thePeople}) =>{
  	
  	return (<div><ul>{thePeople.map(p => <li key={p.name}> {p.name} {p.phone}</li>)
  		}</ul></div>)

  }

  export default Persons