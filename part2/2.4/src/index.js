import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
    <h1>{course.name}</h1>

    {course.parts.map((x) =>
    	<div>{x.name} {x.exercises}</div>
    	)}
    
    	
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}



ReactDOM.render(
  <App  />,
  document.getElementById('root')
)