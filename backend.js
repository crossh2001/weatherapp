const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

const API_KEY = '12ed9de8703b59faae2dca61e732f26f';

app.use(cors());
app.use(bodyParser.json());

let wData ="";



    app.post('/', async (req, res) => {
    const cityWeather = req.body;
    const city = cityWeather.city ;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    const weatherData = response.data;
    res.json(weatherData);
    wData=weatherData;
    console.log("Weather data is "+weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }

  console.log("city is "+city);
    
    });

app.get('/weather/current', async (req, res) => {
  const { city } = req.query;
  //const { city } = wData;
  console.log("Name of this city is "+city);
  
  
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    const weatherData = response.data;
    res.json(weatherData);
    wData = weatherData;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});



//const city = 'London'; // Replace with the city name you want to fetch weather data for
//const {city} = cityWeather;

/*axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  .then((response) => {
    const weatherData = response.data;
    console.log('Weather Data:', weatherData);
    wData = weatherData;
  })
  .catch((error) => {
    console.error('Error fetching weather data:', error.message);
  });*/


app.get('/', (req, res) => {
  res.json(wData);
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
