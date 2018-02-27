const searchCity = document.getElementById('searchCity');

searchCity.addEventListener('change', function(){
  const searchValue = searchCity.value;
  getTodaysWeather(searchValue);
})

getTodaysWeather("Stockholm");

function getTodaysWeather(city){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=7ef221639d98c54fa5628abce11dd0be&units=metric&lang=se')
    .then(function(response){
      return response.json();
    })
    .then(function(weatherData){
      displayWeather(weatherData);
    })
    .catch(function(error){
      console.log(error);
    })
}


function displayWeather(weatherData){
  const weatherInfoElement = document.getElementById('weatherInfo');
  let weatherInfo = `
    <h3>Väder:</h3>
    <p> ${weatherData.weather[0].description} </p>
    <h3>Temperatur:</h3>
    <p> ${weatherData.main.temp} ℃ </p>
  `;
  weatherInfoElement.innerHTML = weatherInfo;
}
