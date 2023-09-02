import { useState, useEffect } from "react";
import axios from 'axios';

function WeatherData(){
const [data, setData] = useState([]);

useEffect(() => {
    // Fetch data from Express backend API
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));

  }, []);

  
  console.log("This is the value:");
  console.log(data);

  const weatherData = data.main?.temp;
  console.log(weatherData);
  
    return(
        <>
            <h1>Weather Data page</h1>
            <h3>The Temp is : {weatherData}</h3>
        </>
    )
 } 

 export default WeatherData