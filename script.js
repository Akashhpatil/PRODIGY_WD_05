function getWeather() {
    const location = document.getElementById('location').value;

    if (location) {
        fetch(`http://api.weatherstack.com/current?access_key=4932ac8920ff93e7ff98d7e9bbaa66cc&query=${location}`)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weather-info');
                weatherInfo.innerHTML = `
                    <h2>${data.location.name}, ${data.location.country}</h2>
                    <p>Weather: ${data.current.weather_descriptions[0]}</p>
                    <p>Temperature: ${data.current.temperature}°C</p>
                    <p>Humidity: ${data.current.humidity}%</p>
                `;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }
}
