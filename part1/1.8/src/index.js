import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Statistics = (props) => 
{
	return	(
		<>
		<div>good {props.good}</div>
		<div>bad {props.bad}</div>
		<div>neutral {props.neutral}</div>
		<div>all {props.good + props.bad + props.neutral}</div>
		<div>average {(props.good + props.bad + props.neutral)/3}</div>
		<div>positive { (props.good + props.bad + props.neutral)==0 ? 0: props.good / (props.good + props.bad + props.neutral)}%</div>
		</>
	)
}

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

			<Statistics good={good} bad={bad} neutral={neutral}/>	

		</>

  )

}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

