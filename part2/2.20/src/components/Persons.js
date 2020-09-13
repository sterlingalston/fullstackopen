import React, { useState } from 'react'

  const Persons = ({thePeople, delHandle}) =>{
  	
  	return (<div><ul>{thePeople.map(p => <li name={p.name} key={p.name}> {p.name} {p.phone} <button onClick={delHandle}>delete</button></li>)
  		}</ul></div>)

  }

  export default Persons