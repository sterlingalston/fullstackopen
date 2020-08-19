import React, { useState, useEffect } from 'react'
import axios from 'axios'

  const Weather = ({theCity}) =>{
  
  const [ cityData, setCityData] = useState()	

  const hook = () =>{
    console.log('effect')
    
    axios
      .get('http://api.weatherstack.com/current?access_key=' + process.env.REACT_APP_WEATHER_API_KEY +
    '&query=' + encodeURI(theCity))
      .then(response =>{
        console.log('promise fulfilled')
        //console.log(response.data)
        setCityData(response.data)
        //alert(cityData.current.temperature)
      })

  }

  useEffect(hook,cityData)
  try
  {
  	return (<div>
           <div><b>temperature: </b> {cityData.current.temperature} Celcius</div>
           <div><img src={cityData.current.weather_icons} /></div>
           <div><b>wind: </b> {cityData.current.wind_speed} mph direction {cityData.current.wind_direction}</div>
  			</div>)
  }
  catch{
    return <div></div>
  }

  }

  export default Weather