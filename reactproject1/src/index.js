import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello world Prop is {props.name} here</p>
      <p>      Hello worlder again, {props.name}. You are {props.age} years old.</p>
    </div>
  )
}

const name = "Peter"
const age = 10

/*
const App = () => {
	console.log("Hello from component")
	const now = new Date()
  	const a = 10
  	const b = 20
	return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <Hello name = {name} age = {10} />
      <Hello name = "Daisy" age = {age + 11} />
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
)}*/

// can also define components this way
/*
	const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    <Footer />
  ]
}
*/

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
