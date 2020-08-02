
import React from 'react'

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
    <h2>{course.name}</h2>

    {course.parts.map((x) =>
    	<p>{x.name} {x.exercises}</p>
    	)}
    <div>
    <b>total of {course.parts.reduce((sum, val) => sum + val.exercises,0)} exercises </b></div>	
    	
    </div>
  )
}

export default Course