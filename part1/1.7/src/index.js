import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Survey = {good: 1, bad: 2, neutral: 0}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const setTheGood = (value) => setGood(value)
const setTheBad = (value) => setBad(value)
const setTheNeutral = (value) => setNeutral(value)


  return(
		<>
		<h1>give feedback </h1>
				<div><button onClick={() => setTheGood(good +1)}>good</button>
				<button onClick={() => setTheNeutral(neutral +1)}> neutral</button> 
				<button onClick={() => setTheBad(bad +1)}>bad</button> 
				</div>
<h1>statistics </h1>
				<div>good {good}</div>
				<div>bad {bad}</div>
				<div>neutral {neutral}</div>
				
<div>all {good + bad + neutral}</div>
				<div>average {(good + bad + neutral)/3}</div>
				<div>positive { (good + bad + neutral)==0 ? 0: good / (good + bad + neutral)}%</div>
		</>

  )

}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

