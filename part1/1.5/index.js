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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content part1 = {course.parts[0].name} exercises1 = {course.parts[0].exercises}
      part2 = {course.parts[1].name} exercises2 = {course.parts[1].exercises}
      part3 = {course.parts[2].name} exercises3 = {course.parts[2].exercises}
      />
      <Total number = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))