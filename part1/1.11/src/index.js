import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const Statistic = ({text, value}) =>{
	return (<tr><td>{text}</td><td> {value}</td></tr>)
}

const Button = ({text, handler}) =>{
	return (<button onClick={handler}>{text}</button>)	
}

const Statistics = (props) => 
{

if((props.good + props.bad + props.neutral)==0){
return (<>No feedback given</>)
}

else{
	return	(
		<table>
		<Statistic text="good" value={props.good} />
		<Statistic text="bad" value={props.bad} />
		<Statistic text="neutral" value={props.neutral} />
		<Statistic text="all" value={props.total}/>
		<Statistic text="average" value={Math.round((props.total / 3 + Number.EPSILON)*100)/100}/>
		<Statistic text="positive" value={Math.round((props.good / props.total+ Number.EPSILON)*100)/100 * 100+ '%'} />
		</table>
	)
	}
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
				<div>
				<Button text="good" handler={() => setTheGood(good +1)} />
				<Button text="neutral" handler={() => setTheNeutral(neutral +1)} />
				<Button text="bad" handler={() => setTheBad(bad +1)} />
				</div>
<h1>statistics </h1>

			<Statistics good={good} bad={bad} neutral={neutral} total={good + bad + neutral}/>	

		</>

  )

}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

