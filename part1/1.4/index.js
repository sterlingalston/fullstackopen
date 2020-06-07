import React from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => 
	{return (<p>Number of exercises {props.number}</p>)}
	
const Part = (props) => 
(
	<p> {props.part} {props.exercises}	</p>
)

const Content = (props) =>  (<>
	<Part part = {props.part1} exercises = {props.exercises1}/>
	<Part part = {props.part2} exercises = {props.exercises2}/>
	<Part part = {props.part3} exercises = {props.exercises3}/>
	</>)

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const App = () => {
  const course = 'Half Stack application development'
const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {parts[0].name} exercises1 = {parts[0].exercises}
      part2 = {parts[1].name} exercises2 = {parts[1].exercises}
      part3 = {parts[2].name} exercises3 = {parts[2].exercises}
      />
      <Total number = {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))